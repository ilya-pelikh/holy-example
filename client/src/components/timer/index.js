import React, { useState, useEffect } from 'react';

import { StyledTimer, StyledTimerContainer, StyledTimerOnboarding } from './timer.styled'

const Timer = ({ onboardingStep }) => {
    // 10 minutes in seconds
    const [timeInSeconds, setTimeInSeconds] = useState(600);

    useEffect(() => {
        if (onboardingStep < 6) return;

        // Stop the timer when it reaches 0
        if (timeInSeconds <= 0) return;

        // Set up the interval to decrement the timer every second
        const timerInterval = setInterval(() => {
            setTimeInSeconds((prevTime) => prevTime - 1);
        }, 1000);

        // Clean up the interval when the component unmounts or the timer reaches 0
        return () => clearInterval(timerInterval);
    }, [timeInSeconds, onboardingStep]);

    // Convert seconds into minutes and seconds
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
