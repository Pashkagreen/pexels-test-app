import React from 'react';
import './Categories.scss'
import {Link} from 'react-router-dom'

const Categories: React.FC = () => {
    return (
        <>
        <ul className='categories'>
            <li><Link to='/'>Главная</Link></li>
            <li><Link to='/search'>Найти</Link></li>
            <li><Link to='/'>Лучшие челленджи</Link></li>
            <li><Link to='/'>Авторы</Link></li>
        </ul>
            <div className="underline"></div>
        </>
    );
};

export default Categories;