import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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
    const [taskSuite, setTaskSuites] = useState([]);
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [onboardingStep, setOnboardingStep] = useState(1);

    const onClickExitButton = () => {
        // Переходим в начало
        navigate('/');
    };

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

    useEffect(() => {
        const fetchSuites = async () => {
            const response = await fetch('http://localhost:3001/tasks/suite');
            const data = await response.json();
            setTaskSuites(data.suites);
        };

        try {
            fetchSuites();
        } catch (error) {
            console.error('Error fetching suites:', error);
        }
    }, []);

    const task = taskSuite[currentTaskIndex];

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
                <CheckButton taskIndex={currentTaskIndex} enteredCode={enteredCode} onboardingStep={onboardingStep} />
            </StyledFooter>
        </StyledFullScreen>
    );
}

export default Code;
