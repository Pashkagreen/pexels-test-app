import React from 'react';
import './SearchForm.scss'

const SearchForm: React.FC = () => {
    return (
        <div className='search-form'>
            <input className='search-input' type="text" value='' name='' placeholder='Ищите бесплатные фото и видео'/>
            <button className='search-button'>
                <i className="fas fa-search"></i>
            </button>
        </div>
    );
};

export default SearchForm;