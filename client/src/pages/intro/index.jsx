import React, { useState } from 'react';
import './intro.css'
import title from '../../assest/title.png'
import TextDialog from '../components/textDialog';
import { useNavigate } from 'react-router-dom'
    ;
function Intro() {
    const navigate = useNavigate(); // Получаем функцию navigate

    const [isHelpButtonVisible, setHelpButtonVisible] = useState(true);

    const onCklickHelpButton = () => {
        setHelpButtonVisible(false)
    }

    const onCklickInterveneButton = () => {
        // Переходим на новый маршрут
        navigate('/code');
    };

    return (
        <div className='background'>
            <img src={title} alt="Бабушка в беде" className='title' />
            {isHelpButtonVisible &&
                <button className='helpButton' onClick={onCklickHelpButton}>Помочь</button>}
            {!isHelpButtonVisible &&
                <><TextDialog /><button className='interveneButton' onClick={onCklickInterveneButton}>Вмешаться</button></>
            }
        </div>
    );
}

export default Intro;
