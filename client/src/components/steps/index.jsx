import React from 'react';

import { StepStyled, StepsStyled, StyledStepsOnboarding } from './steps.styled'
import './steps.css'


const Steps = ({ onboardingStep }) => {
    return (
        <StepsStyled onboardingStep={onboardingStep}>
            { /* Шаги задания */}
            <StepStyled id="stage1" className='stage active'>[ Получение звонка ]</StepStyled>
            <StepStyled>----</StepStyled>
            <StepStyled id="stage2" className='stage'>[ Подозрение ]</StepStyled>
            <StepStyled>----</StepStyled>
            <StepStyled id="stage3" className='stage'>[ Проверка ]</StepStyled>
            <StepStyled>----</StepStyled>
            <StepStyled id="stage4" className='stage'>[ Блокировка ]</StepStyled>
            <StepStyled>----</StepStyled>
            <StepStyled id="stage5" className='stage'>[ Защита завершена ]</StepStyled>

            { /* Онбординг */}
            <StyledStepsOnboarding onboardingStep={onboardingStep}>
                Помешай мошенникам взломать бабушку
            </StyledStepsOnboarding>
        </StepsStyled>
    );
}

export default Steps;
