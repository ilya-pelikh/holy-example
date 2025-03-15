import React from 'react';

import Timer from '../../components/timer'
import Steps from '../../components/steps'
import Editor from '../../components/editor'
import Sample from '../../components/sample'
import { ReactComponent as ExitIcon } from '../../assest/exit.svg';

import './index.css';

const Code = () => {
    return (
        <div id='full-screen'>
            <div id='header'>
                <Timer />
                <Steps />
                <div id='exit-container'><ExitIcon fill='#36FFFF' id='exit' /></div>
            </div>
            <div id="body">
                <Sample />
                <Editor />
            </div>
            <div id="footer">
                <div id='check-code'>
                    <div id='check-code-text'>Подобрать код</div>
                </div>
            </div>
        </div>
    );
}

export default Code;
