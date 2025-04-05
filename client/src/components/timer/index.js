import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { StyledTimer, StyledTimerContainer, StyledTimerOnboarding } from './timer.styled'

const Timer = ({ onboardingStep }) => {
    const [timeInSeconds, setTimeInSeconds] = useState(600);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (onboardingStep < 6) return;

        if (onboardingStep === 6 && !isActive) {
            axios.post('http://localhost:3001/timer/start')
                .then(() => setIsActive(true))
                .catch(error => {
                    console.error('Error starting timer:', error);
                    // If timer is already running, just set isActive to true
                    if (error.response?.status === 400) {
                        setIsActive(true);
                    }
                });
        }

        if (timeInSeconds <= 0) return;

        const timerInterval = setInterval(async () => {
            try {
                const response = await axios.get('http://localhost:3001/timer/state');
                const { remainingTime, isActive: serverIsActive } = response.data;

                if (!serverIsActive) {
                    setIsActive(false);
                    setTimeInSeconds(0);
                    clearInterval(timerInterval);
                    return;
                }

                setTimeInSeconds(Math.floor(remainingTime / 1000));
            } catch (error) {
                console.error('Error fetching timer state:', error);

                setIsActive(false);
                setTimeInSeconds(0);
                clearInterval(timerInterval);
            }
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [onboardingStep, isActive]);

    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return (
        <StyledTimerContainer onboardingStep={onboardingStep}>
            { /* Таймер */}
            <StyledTimer>
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </StyledTimer>

            { /* Онбординг */}
            <StyledTimerOnboarding onboardingStep={onboardingStep}>
                Но у тебя мало времени
            </StyledTimerOnboarding>
        </StyledTimerContainer>
    );
}

export default Timer;
