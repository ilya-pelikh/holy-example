import React, { useState, useEffect } from 'react';
import Axios from "axios";

import { StyledCheckButton, StyledCheckButtonText, StyledCheckButtonOnboarding, StyledCheckButtonContainer } from './checkButton.styled'
import SuccessFinish from '../status/successFinish'
import SuccessStep from '../status/successStep'
import FaildStep from '../status/faildStep'

/**
 * Отправляет код на проверку
 * @param {string} code - Код для проверки
 * @param {string} id - Идентификатор задачи
 * @returns { Promise<{
 *  data: {
 *   result: boolean,
 *   message: string,
 *   expected: string,
 *   received: string,
 *   wrongTestIndex: number,
 *   testsCount: number
 *  }
 * }}> - Результат проверки
 */
const submitCode = async (code, id) => {
    return Axios({
        method: "POST",
        url: `http://localhost:3001/tasks/${id}`,
        headers: {
            "Content-Type": "application/json",
            "accept-token": "secret_token",
        },
        data: {
            id: id,
            code: code,
        }
    })
}

const Timer = ({ taskIndex, enteredCode, onboardingStep }) => {
    let [currentStage, setCurrentStage] = useState(2)
    const [showSuccessStep, setShowSuccessStep] = useState(false);
    const [showFaildStep, setShowFaildStep] = useState(false);
    const [showSuccessFinish, setShowSuccessFinish] = useState(false);

    console.log('taskIndex', taskIndex)
    console.log('enteredCode', enteredCode)


    // Функция для перехода к следующему этапу
    function nextStage() {
        // Убираем подсветку с текущего этапа
        document.getElementById(`stage${currentStage}`).classList.remove('active');

        console.log(`stage${currentStage}`, 7777)

        // Переходим к следующему этапу
        setCurrentStage(currentStage + 1)

        console.log(`stage${currentStage}`, 8888)

        if (currentStage >= 5) {
            setShowSuccessFinish(true)
        }

        // Подсвечиваем новый этап
        document.getElementById(`stage${currentStage}`).classList.add('active');
    }

    const onClick = () => submitCode(enteredCode, taskIndex + 1)
    .then(res => {
        if (res.data.result) {
            setShowSuccessStep(true);
            nextStage()
        } else if (!res.data.result) {
            setShowFaildStep(true);
            console.log('Провал')
        } else {
            console.log('Ошибочка')
        }
    })
    .catch(error => {
        console.log('Ошибка', error)
    });

    const closeSuccessStep = () => {
        setShowSuccessStep(false);
    };

    const closeFaildStep = () => {
        setShowFaildStep(false);
    };

    return (
        <StyledCheckButtonContainer>
            { /* Онбординг */}
            <StyledCheckButtonOnboarding onboardingStep={onboardingStep}>
                Нажми сюда для проверки
            </StyledCheckButtonOnboarding>

            { /* Кнопка проверки */}
            <StyledCheckButton onboardingStep={onboardingStep}>
                <StyledCheckButtonText onClick={onClick}>Подобрать код</StyledCheckButtonText>
                {/* Поп-ап */}
                {showSuccessStep && <SuccessStep onClose={closeSuccessStep} />}
                {showFaildStep && <FaildStep onClose={closeFaildStep} />}
                {showSuccessFinish && <SuccessFinish />}
            </StyledCheckButton>
        </StyledCheckButtonContainer>
    );
}

export default Timer;
