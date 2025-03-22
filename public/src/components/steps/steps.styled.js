import styled from "styled-components";

export const StepsStyled = styled.div`
    position: relative;
    margin-top: 8px;
    z-index: ${(props) => (props.onboardingStep === 1 ? 1 : 'auto')};
`

export const StepStyled = styled.div`
    display: inline-block;

    font-size: 13px;

    color: #FFFFFF;
`

export const StyledStepsOnboarding = styled.div`
    position: absolute;
    right: 0;
    display: ${(props) => (props.onboardingStep === 1 ? 'block' : 'none')};

    padding: 8px 8px 0 8px;

    color: #62ECFF;
    background: #000000;
    border: 1px solid #62ECFF;
`