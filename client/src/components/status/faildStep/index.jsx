import React, { useState, useEffect } from 'react';

import './faildStep.css'

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

const FaildStep = ({ onClose }) => {
    return (
        <div class="overlay">
            <div class="negativPopup">
                <h1>Не получилось :(</h1>
                <p>Попробуй еще раз!</p>
                <button class='buttonF' onClick={onClose}>ок</button>
            </div>
        </div>
    );
}

export default FaildStep;
