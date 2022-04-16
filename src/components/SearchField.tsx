import React, {FormEvent, useCallback, useEffect, useState} from 'react';
import './SearchField.scss'
import SearchForm from "./SearchForm";
import tips from "./tips";
import IntroProps from "../types/inputProps";

const SearchField:React.FC<IntroProps> = ({onSearch}) => {
    const [search, setSearch] = useState('');


    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        onSearch(search);
        setSearch('');
        console.log()
    }

    const arrTipsFunc = useCallback(() => {
        let setTips = new Set()
        while (setTips.size !== 7) {
            let arr = tips[Math.floor(Math.random() * 40)]
            setTips.add(arr)
        }
        let arrTips: any[] = Array.from(setTips)
        return arrTips
    },[])


    return (
        <div className='search-field' >
            <h1 className='search-title'>Лучшие бесплатные стоковые фото, изображения без роялти и видео от талантливых авторов.</h1>
            <form className='search-block' onSubmit={submitHandler}>
            <SearchForm value={search} onChange={(e) => setSearch(e.currentTarget.value)}/>
            <button className='search-button'>
                <i className='fa fa-search'></i>
            </button>
            </form>
            <div className='search-tips'>
                <span>Идеи для поиска:</span>
                <ul className='search-keywords'>
                    {
                        arrTipsFunc().map(item => <li key={item.id}><a href="#">{item.tip},</a></li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default SearchField;