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

const FaildStep = () => {
    return (
        <div class="overlay">
            <div class="popup">
                <h1>Не получилось :(</h1>
                <p>Попробуй еще раз!</p>
                <button>ок</button>
            </div>
        </div>
    );
}

export default FaildStep;
