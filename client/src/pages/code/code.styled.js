import styled from "styled-components";

import { ReactComponent as ExitIcon } from '../../assest/exit.svg';

export const StyledFullScreen = styled.div`
    width: 100vw;
    height: 100%;
    align-items: center;

    display: flex;
    flex-direction: column;

    background: #010B02;
`

export const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;

    width: 83vw;
    margin: 20px 0;
`

export const StyledBody = styled.div`
    display: flex;

    justify-content: center;
`

export const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
`

export const StyledOverlay = styled.div`
    background-color: rgba(0, 0, 0, 0.9);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`

export const StyledExitIcon = styled(ExitIcon)`
    width: 32px;
    height: 32px;
`

export const StyledExitButton = styled.button`
    background-color: #010B02;
    border: none;

    width: 32px;
    height: 32px;

    margin: 4px 0 0 0;

    cursor: pointer;
    z-index: 10;
`
