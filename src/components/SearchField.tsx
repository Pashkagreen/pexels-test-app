import React from 'react';
import './SearchField.scss'
import SearchForm from "./SearchForm";
import tips from "./tips";
const SearchField:React.FC = (props) => {
    let setTips = new Set()
    while (setTips.size !== 7) {
        let arr = tips[Math.floor(Math.random() * 40)]
        setTips.add(arr)
    }
    let arrTips: any[] = Array.from(setTips)
    return (
        <div className='search-field' >
            <h1 className='search-title'>Лучшие бесплатные стоковые фото, изображения без роялти и видео от талантливых авторов.</h1>
            <SearchForm/>
            <div className='search-tips'>
                <span>Идеи для поиска:</span>
                <ul className='search-keywords'>
                    {
                        arrTips.map(item => <li key={item.id}><a href="#">{item.tip},</a></li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default SearchField;