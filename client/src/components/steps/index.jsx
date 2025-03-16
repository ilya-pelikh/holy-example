import React from 'react';

import { StepStyled, StepsStyled, StyledStepsOnboarding } from './steps.styled'

const Steps = ({ onboardingStep }) => {
    return (
        <StepsStyled onboardingStep={onboardingStep}>
            { /* Шаги задания */}
            <StepStyled >[ Получение звонка ]</StepStyled>
            <StepStyled>----</StepStyled>
            <StepStyled>[ Подозрение ]</StepStyled>
            <StepStyled>----</StepStyled>
            <StepStyled>[ Проверка ]</StepStyled>
            <StepStyled>----</StepStyled>
            <StepStyled>[ Блокировка ]</StepStyled>
            <StepStyled>----</StepStyled>
            <StepStyled>[ Защита завершена ]</StepStyled>

            { /* Онбординг */}
            <StyledStepsOnboarding onboardingStep={onboardingStep}>
                Помешай мошенникам взломать бабушку
            </StyledStepsOnboarding>
        </StepsStyled>
    );
}

export default Steps;
