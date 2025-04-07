import React, { useState } from 'react';
import Axios from "axios";

import { StyledCheckButton, StyledCheckButtonText, StyledCheckButtonOnboarding, StyledCheckButtonContainer } from './checkButton.styled'
import SuccessFinish from '../status/successFinish'
import SuccessStep from '../status/successStep'
import FailedStep from '../status/failedStep'

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
 *   wrongTestNumber: number,
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

const CheckButton = ({ taskId, enteredCode, onboardingStep, onSuccessSubmit }) => {
    let [currentStage, setCurrentStage] = useState(2)
    const [showSuccessStep, setShowSuccessStep] = useState(false);
    const [showSuccessFinish, setShowSuccessFinish] = useState(false);
    const [errorDetails, setErrorDetails] = useState(null);

    // Функция для перехода к следующему этапу
    function nextStage() {
        // Убираем подсветку с текущего этапа
        document.getElementById(`stage${currentStage}`).classList.remove('active');

        console.log(`stage${currentStage}`, 7777)

        // Переходим к следующему этапу
        setCurrentStage(currentStage + 1)

        console.log(`stage${currentStage}`, 8888)

        if (currentStage >= 5) {
            setShowSuccessStep(false)
            setShowSuccessFinish(true)
        }

        // Подсвечиваем новый этап
        document.getElementById(`stage${currentStage}`).classList.add('active');
    }

    const onClick = () => {
        closeFailedStep();
        submitCode(enteredCode, taskId)
            .then(res => {
                if (res.data.result) {
                    setShowSuccessStep(true);
                    nextStage()
                } else if (!res.data.result) {
                    setErrorDetails(res.data);
                    console.log('Провал')
                } else {
                    console.log('Ошибочка')
                }
            })
            .catch(error => {
                console.log('[onClick] Ошибка', error)
                if (error?.response?.data?.error) {
                    setErrorDetails({
                        message: error.response.data.error,
                        details: error.response.data.details,
                    });
                    return;
                }
            });
    }

    const closeSuccessStep = () => {
        setShowSuccessStep(false);
        onSuccessSubmit();
    };

    const closeFailedStep = () => {
        setErrorDetails(null);
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
                {!!errorDetails && <FailedStep errorDetails={errorDetails} onClose={closeFailedStep} />}
                {showSuccessFinish && <SuccessFinish />}
            </StyledCheckButton>
        </StyledCheckButtonContainer>
    );
}

export default CheckButton;
