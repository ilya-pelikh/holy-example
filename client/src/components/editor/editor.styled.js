import styled from "styled-components";

export const EditorStyled = styled.div`
    width: 40vw;
    height: 60vh;
    z-index: ${(props) => (props.onboardingStep === 4 ? 1 : 'auto')};

    font-family: 'Monaco', arial;

    border: 2px solid #56FF71;
`

export const StyledEditorOnboarding = styled.div`
    position: absolute;
    left: 19vw;
    top: 30vh;
    z-index: 1;
    display: ${(props) => (props.onboardingStep === 4 ? 'block' : 'none')};

    width: 30vw;
    padding: 8px 8px 0 8px;

    font-size: 16px;
    color: #62ECFF;
    background: #000000;
    border: 1px solid #62ECFF;
`
