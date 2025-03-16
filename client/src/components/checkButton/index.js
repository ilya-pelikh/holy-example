import React, { useState, useEffect } from 'react';

import { StyledCheckButton, StyledCheckButtonText, StyledCheckButtonOnboarding, StyledCheckButtonContainer } from './checkButton.styled'

const Timer = ({ onboardingStep }) => {
    return (
        <StyledCheckButtonContainer>
            { /* Онбординг */}
            <StyledCheckButtonOnboarding onboardingStep={onboardingStep}>
                Нажми сюда для проверки
            </StyledCheckButtonOnboarding>

            { /* Кнопка проверки */}
            <StyledCheckButton onboardingStep={onboardingStep}>
                <StyledCheckButtonText>Подобрать код</StyledCheckButtonText>
            </StyledCheckButton>
        </StyledCheckButtonContainer>
    );
}

export default Timer;
