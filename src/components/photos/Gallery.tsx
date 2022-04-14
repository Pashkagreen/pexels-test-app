import React, {useEffect, useState} from 'react';
import './Gallery.scss'
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchPhoto} from "../../store/action-creators/photo";
import {fetchPhotos} from "../../store/action-creators/photo";
import 'font-awesome/css/font-awesome.min.css';

const Gallery:React.FC = () => {
    const dispatch = useDispatch()
    const state = useTypedSelector(state => state.photos)
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        if (fetching) {
            dispatch(fetchPhotos(currentPage))
            setCurrentPage(prevState => prevState + 1)
            setFetching(false)
        }
    },[dispatch, fetching])
    console.log(state)

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    },[])

    const scrollHandler = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }

    return (
        <div className='container'>
            <span>Бесплатные стоковые фото</span>
            <div className="row">
                    {   state?.photos.map(item=>
                            <div key={item.id} className='column'>
                        <img src={item.src.original} alt={item.photographer} style={{width: '100%'}} className='search-img'/>
                                <a href={item.photographer_url}>{item.photographer}</a>
                                <i className="fa-solid fa-download fa-2x"></i>
                            </div>)
                    }
            </div>
        </div>
    );
};

export default Gallery;