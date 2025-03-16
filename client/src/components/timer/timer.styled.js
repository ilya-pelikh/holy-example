import styled from "styled-components";

export const StyledTimerContainer = styled.div`
  position: relative;

  z-index: ${(props) => (props.onboardingStep === 2 ? 1 : 'auto')};
`

export const StyledTimer = styled.div`
  color: #36FFFF;
  font-size: 30px;
`

export const StyledTimerOnboarding = styled.div`
    position: absolute;
    left: 90%;
    bottom: -25px;
    display: ${(props) => (props.onboardingStep === 2 ? 'block' : 'none')};

    width: max-content;
    padding: 8px 8px 0 8px;

    font-size: 16px;
    color: #62ECFF;
    background: #000000;
    border: 1px solid #62ECFF;
`
