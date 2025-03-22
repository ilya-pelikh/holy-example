import React, { useState, useEffect } from 'react';

import './faildFinish.css'

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

const FaildFinish = () => {
    return (
        <div class="overlay">
            <div class="popup">
                <h1>Время вышло!</h1>
                <p>Злоумышленники оказались хитрее...</p>
                <button>:(</button>
            </div>
        </div>
    );
}

export default FaildFinish;
