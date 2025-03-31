import styled from "styled-components";

export const SampleStyled = styled.div`
    width: 40vw;
    height: 60vh;
    z-index: ${(props) => (props.onboardingStep === 3 ? 1 : 'auto')};

    margin-right: 40px;

    border: 2px solid #56FF71;
`

export const StyledSampleOnboarding = styled.div`
    position: absolute;
    right: 19vw;
    top: 30vh;
    z-index: 1;
    display: ${(props) => (props.onboardingStep === 3 ? 'block' : 'none')};

    width: 30vw;
    padding: 8px 8px 0 8px;

    font-size: 16px;
    color: #62ECFF;
    background: #000000;
    border: 1px solid #62ECFF;
`
