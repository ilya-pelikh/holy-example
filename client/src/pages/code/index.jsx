import React, { useState, useEffect } from 'react';

import Timer from '../../components/timer'
import Steps from '../../components/steps'
import Editor from '../../components/editor'
import Sample from '../../components/sample'
import { ReactComponent as ExitIcon } from '../../assest/exit.svg';

import './index.css';

const Code = () => {
    const [onboardingStep, setOnboardingStep] = useState(1);

    useEffect(() => {
        const handleClick = (event) => {
            setOnboardingStep(onboardingStep + 1)
            // Ваша логика обработки клика
        };

        // Добавляем слушатель события на window
        window.addEventListener('click', handleClick);

        // Удаляем слушатель события при размонтировании компонента
        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [onboardingStep]);

    return (
        <div id='full-screen'>
            { /* Затемнение экрана для онбординга */}
            {onboardingStep && <div id="overlay" />}

            { /* Заголовок */}
            <div id='header'>
                <Timer onboardingStep={onboardingStep} />
                <Steps onboardingStep={onboardingStep} />
                <div id='exit-container'><ExitIcon fill='#36FFFF' id='exit' /></div>
            </div>
            <div id="body">
                <Sample onboardingStep={onboardingStep} />
                <Editor />
            </div>
            <div id="footer">
                <div id='check-code'>
                    <div id='check-code-text'>Подобрать код</div>
                </div>
            </div>
        </div>
    );
}

export default Code;
