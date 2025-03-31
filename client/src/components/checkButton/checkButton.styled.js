import styled from "styled-components";

export const StyledCheckButtonContainer = styled.div`
    position: relative;
`

export const StyledCheckButton = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${(props) => (props.onboardingStep === 5 ? 1 : 'auto')};

    width: 30vw;

    margin-top: 8vh;

    color: #FAF74C;
    background-color: #082B0B;
    border: 3px solid #56FF71;

    cursor: pointer;
`

export const StyledCheckButtonText = styled.button`
    width: 100%;
    border: none;
    outline: none;
    background: transparent !important;
`

export const StyledCheckButtonOnboarding = styled.div`
    position: absolute;
    right: -60%;
    display: ${(props) => (props.onboardingStep === 5 ? 'block' : 'none')};
    z-index: ${(props) => (props.onboardingStep === 5 ? 1 : 'auto')};

    width: max-content;
    padding: 8px 8px 0 8px;

    font-size: 16px;
    color: #62ECFF;
    background: #000000;
    border: 1px solid #62ECFF;
`
