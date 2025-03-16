import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import Timer from '../../components/timer'
import Steps from '../../components/steps'
import Editor from '../../components/editor'
import Sample from '../../components/sample'
import CheckButton from '../../components/checkButton'

import {
    StyledBody,
    StyledFooter,
    StyledHeader,
    StyledOverlay,
    StyledExitIcon,
    StyledFullScreen,
    StyledExitButton,
} from './code.styled.js'

const Code = () => {
    const navigate = useNavigate();
    const [onboardingStep, setOnboardingStep] = useState(1);

    useEffect(() => {
        const handleClick = (event) => {
            if (onboardingStep < 6) {
                setOnboardingStep(onboardingStep + 1)
            }
        };

        // Добавляем слушатель события на window
        window.addEventListener('click', handleClick);

        // Удаляем слушатель события при размонтировании компонента
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [onboardingStep]);

    const onClickExitButton = () => {
        // Переходим в начало
        navigate('/');
    };

    return (
        <StyledFullScreen>
            { /* Затемнение экрана для онбординга */}
            {onboardingStep < 6 ? <StyledOverlay /> : <div></div>}

            { /* Заголовок */}
            <StyledHeader>
                <Timer onboardingStep={onboardingStep} />
                <Steps onboardingStep={onboardingStep} />
                <StyledExitButton onClick={onClickExitButton}>
                    <StyledExitIcon fill='#36FFFF' />
                </StyledExitButton>
            </StyledHeader>

            { /* Поля для кода */}
            <StyledBody>
                <Sample onboardingStep={onboardingStep} />
                <Editor onboardingStep={onboardingStep} />
            </StyledBody>

            { /* Кнопка проверки кода */}
            <StyledFooter>
                <CheckButton onboardingStep={onboardingStep} />
            </StyledFooter>
        </StyledFullScreen>
    );
}

export default Code;
