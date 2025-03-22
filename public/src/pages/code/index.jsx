import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { tasks } from '../../tasks';
import Timer from '../../components/timer/index.js'
import Steps from '../../components/steps/index.jsx'
import Editor from '../../components/editor/index.jsx'
import Sample from '../../components/sample/index.jsx'
import CheckButton from '../../components/checkButton/index.js'

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
    const [enteredCode, setEnteredCode] = React.useState(`const injection = (prop) => {
    // Код модуля injection, который вернет ожидаемый результат
}
`);
    const [saveStep, setSaveStep] = useState(1);
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

    // const taskIndex = Math.floor(Math.random() * (14 - 0 + 1)) + 0;
    const taskIndex = 0;

    const task = tasks[taskIndex]

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
                <Sample task={task} onboardingStep={onboardingStep} />
                <Editor enteredCode={enteredCode} setEnteredCode={setEnteredCode} onboardingStep={onboardingStep} />
            </StyledBody>

            { /* Кнопка проверки кода */}
            <StyledFooter>
                <CheckButton taskIndex={taskIndex} enteredCode={enteredCode} onboardingStep={onboardingStep} />
            </StyledFooter>
        </StyledFullScreen>
    );
}

export default Code;
