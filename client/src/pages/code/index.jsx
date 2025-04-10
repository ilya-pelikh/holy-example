import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

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
/**
 * Получает список заданий
 * @returns {Promise<{ suites: { id: string, code: string }[] }>} - Список заданий
 */
const fetchTasksSuite = async () => {
    const response = await axios.get('http://localhost:3001/tasks/suite');
    return response.data.suites;
}

const defaultCode = `const injection = (prop) => {
    // Код модуля injection, который вернет ожидаемый результат
}
`;

const Code = () => {
    const navigate = useNavigate();
    const [enteredCode, setEnteredCode] = useState(defaultCode);
    const [taskSuite, setTaskSuites] = useState([]);
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
    const [onboardingStep, setOnboardingStep] = useState(1);

    const onClickExitButton = async () => {
        let insertedPassword = prompt("Введи пароль");

        if (insertedPassword === 'flower') {
            try {
                // Reset the timer before navigation
                await axios.post('http://localhost:3001/timer/reset');
                // Navigate to home page
                navigate('/');
            } catch (error) {
                console.error('Error resetting timer:', error);
                // Still navigate even if timer reset fails
                navigate('/');
            }
        }
    };

    const handleSuccessSubmit = () => {
        setCurrentTaskIndex(currentTaskIndex + 1);
        setEnteredCode(defaultCode);
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
            const suite = await fetchTasksSuite();
            setTaskSuites(suite);
        };

        try {
            fetchSuites();
        } catch (error) {
            console.error('Error fetching suites:', error);
        }
    }, []);

    const task = taskSuite[currentTaskIndex] || {};

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
                <Sample task={task.code} onboardingStep={onboardingStep} />
                <Editor enteredCode={enteredCode} setEnteredCode={setEnteredCode} onboardingStep={onboardingStep} />
            </StyledBody>

            { /* Кнопка проверки кода */}
            <StyledFooter>
                <CheckButton
                    taskId={task.id}
                    enteredCode={enteredCode}
                    onboardingStep={onboardingStep}
                    onSuccessSubmit={handleSuccessSubmit}
                />
            </StyledFooter>
        </StyledFullScreen>
    );
}

export default Code;
