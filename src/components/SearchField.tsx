import React from 'react';
import './SearchField.scss'
import SearchForm from "./SearchForm";
const SearchField:React.FC = (props) => {
    return (
        <div className='search-field'>
            <h1 className='search-title'>Лучшие бесплатные стоковые фото, изображения без роялти и видео от талантливых авторов.</h1>
            <SearchForm/>
            <div className='search-tips'>
                <span>Идеи для поиска:</span>
                <ul className='search-keywords'>
                    <li><a href="#">Автомобили,</a></li>
                    <li><a href="#">32 к,</a></li>
                    <li><a href="#">обои,</a></li>
                    <li><a href="#">котики</a></li>
                </ul>
            </div>
        </div>
    );
};

export default SearchField;