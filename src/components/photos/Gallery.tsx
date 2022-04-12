import React, {useEffect, useState} from 'react';
import './Gallery.scss'
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchPhotos} from "../../store/action-creators/photo";

const Gallery:React.FC = () => {
    const state = useTypedSelector(state => state.photos)
    const dispatch = useDispatch()
    console.log(state)
    useEffect(() => {
        dispatch(fetchPhotos())
    },[])
    return (
        <div className='container'>
            <span>Бесплатные стоковые фото</span>
            <div className="row">
                <div className="column">
                    {
                        state?.photos.map((photo) => console.log(photo))
                    }
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                </div>
                <div className="column">
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                </div>
                <div className="column">
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                </div>
                <div className="column">
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                    <img src="https://html5css.ru/edithtm/rocks.jpg" alt="photo" style={{width: '100%'}}/>
                </div>
            </div>
        </div>
    );
};

export default Gallery;