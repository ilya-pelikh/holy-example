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
    padding: 10px 20px 0 20px;

    background-color: #082B0B;
    border: 3px solid #56FF71;

    cursor: pointer;

    &:hover {
        box-shadow: 0 0 20px 5px rgba(255, 223, 186, 0.4);
    }
`

export const StyledCheckButtonText = styled.button`
    width: 100%;
    border: none;
    outline: none;
    background: transparent !important;

    font-size: 16px;
    cursor: pointer;
    color: #FAF74C;
    border: none;
    border-radius: 5px;

    font-family: 'Minecraftia', arial;
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
