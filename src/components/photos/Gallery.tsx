import React from 'react';
import './Gallery.scss'
import { createClient } from 'pexels';

const Gallery:React.FC=  () => {
    return (
        <div className='container'>
            <span>Бесплатные стоковые фото</span>
            <div className="row">
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