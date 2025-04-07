import React from 'react';
import { useNavigate } from 'react-router-dom'

import './successFinish.css'

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

const SuccessFinish = () => {
    const navigate = useNavigate();
    return (
        <div className="overlay">
            <div className="popup">
                <h1>Бабушка в безопасности!</h1>
                <p>Благодарим тебя, наш герой!</p>
            </div>
        </div>
    );
}

export default SuccessFinish;
