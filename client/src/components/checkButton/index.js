import React, { useState, useEffect } from 'react';
import Axios from "axios";

import { StyledCheckButton, StyledCheckButtonText, StyledCheckButtonOnboarding, StyledCheckButtonContainer } from './checkButton.styled'

const Timer = ({ taskIndex, enteredCode, onboardingStep }) => {
    console.log('taskIndex', taskIndex)
    console.log('enteredCode', enteredCode)

    const onClick = () => Axios({
        method: "POST",
        url: `http://localhost:3000/tasks/${taskIndex + 1}`,
        headers: {
            "Content-Type": "application/json",
            "accept-token": "secret_token",
        },
        data: {
            id: taskIndex + 1,
            code: enteredCode,
        }
    }).then(res => {
        console.log(2, res.data);
    });

    return (
        <StyledCheckButtonContainer>
            { /* Онбординг */}
            <StyledCheckButtonOnboarding onboardingStep={onboardingStep}>
                Нажми сюда для проверки
            </StyledCheckButtonOnboarding>

            { /* Кнопка проверки */}
            <StyledCheckButton onboardingStep={onboardingStep}>
                <StyledCheckButtonText onClick={onClick}>Подобрать код</StyledCheckButtonText>
            </StyledCheckButton>
        </StyledCheckButtonContainer>
    );
}

export default Timer;
