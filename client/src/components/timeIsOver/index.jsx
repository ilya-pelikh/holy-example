import React from 'react';

import './timeIsOver.css';

const TimeIsOver = () => {
    return (
        <div className='finishOverlay'>
            <div className='negativePopup'>
                <h1>
                    Время вышло <br />
                    •︵•
                </h1>
            </div>
        </div>
    );
};

export default TimeIsOver;
