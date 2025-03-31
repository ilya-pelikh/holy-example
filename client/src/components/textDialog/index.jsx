import React from 'react';
import './textDialog.css'

function TextDialog() {
    return (
        <>
            <div className='firstText'>
                <div className='typewriter' style={{ animationDelay: '0s' }}>- Здравствуйте, Антонина Семёновна! Это служба безопасности вашего банка</div>
            </div>
            <div className='secondText'>
                <div className='typewriter' style={{ animationDelay: '3.5s' }}>- Здравствуй, милок, а что случилось то?</div>
            </div>
            <div className='thirdText'>
                <div className='typewriter' style={{ animationDelay: '7s' }}>- Мы зафиксировали попытки перевести деньги с вашей карты минуту назад, это были вы?</div>
            </div>
            <div className='fourthText'>
                <div className='typewriter' style={{ animationDelay: '10.5s' }}>- Нет. Ой что ж это делается, как мне быть?</div>
            </div>
            <div className='fifthText'>
                <div className='typewriter' style={{ animationDelay: '14s' }}>- Сейчас я отправлю вам SMS с кодом...</div>
            </div>
        </>
    );
}

export default TextDialog;
