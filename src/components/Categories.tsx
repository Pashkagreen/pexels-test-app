import React from 'react';
import './Categories.scss'

const Categories: React.FC = () => {
    return (
        <>
        <ul className='categories'>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Найти</a></li>
            <li><a href="#">Лучшие челленджи</a></li>
            <li><a href="#">Авторы</a></li>
        </ul>
            <div className="underline"></div>
        </>
    );
};

export default Categories;