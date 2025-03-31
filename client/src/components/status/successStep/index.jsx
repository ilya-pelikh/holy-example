import React from 'react';

import './successStep.css'

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

const SuccessStep = ({ onClose }) => {
    return (
        <div className="overlay">
            <div className="popup">
                <h1>Код подобран верно!</h1>
                <p>Ты на шаг ближе...</p>
                <button className='popupSuccStep specialSuccButton' onClick={onClose}>ок</button>
            </div>
        </div>
    );
}

export default SuccessStep;
