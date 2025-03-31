import React from 'react';

import './failedStep.css'

// const overlay = document.querySelector('.overlay');
// const popupButton = document.querySelector('.popup button');

// // Показать поп-ап (например, после завершения игры)
// function showPopup() {
//   overlay.style.display = 'flex';
// }

// // Скрыть поп-ап при нажатии на кнопку
// popupButton.addEventListener('click', () => {
//   overlay.style.display = 'none';
// });

// // Пример вызова поп-апа
// showPopup();

const FailedStep = ({ onClose, errorDetails }) => {
    return (
        <div className="overlay">
            <div className="negativPopup">
                <h1>Не получилось :(</h1>
                <p>Попробуй еще раз!</p>
                {errorDetails.testsCount && (
                    <p>Пройдено тестов: {errorDetails.wrongTestNumber - 1} из {errorDetails.testsCount}</p>
                )}
                {errorDetails.expected && errorDetails.received && (
                    <>
                        <p>Ожидаемый результат: {JSON.stringify(errorDetails.expected)}</p>
                        <p>Полученный результат: {JSON.stringify(errorDetails.received)}</p>
                    </>
                )}
                {errorDetails.details && <p>Детали: {errorDetails.details}</p>}
                <button className='buttonF' onClick={onClose}>ок</button>
            </div>
        </div>
    );
}

export default FailedStep;
