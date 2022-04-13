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
    const [pages, setPages] = useState(1)

    useEffect(() => {
        dispatch(fetchPhotos(3))
    },[dispatch])
    console.log(state)


    return (
        <div className='container'>
            <span>Бесплатные стоковые фото</span>
            <div className="row">
                <div className="column">
                    {   state?.photos.map(item=>
                            <div key={item.id}>
                        <img src={item.src.original} alt={item.photographer} style={{width: '100%'}}/>
                                {/*<a href={item.photographer_url}>{item.photographer}</a>*/}
                                {/*<a><i className="fa-thin fa-arrow-down"></i></a>*/}
                                {/*<i className="fa-thin fa-arrow-down"></i>*/}
                                {/*<a><i className="fa-thin fa-download" style={{width: '20px'}}></i></a>*/}
                            </div>)
                    }
                </div>
                <div className="column">
                    {   state?.photos.map(item=>
                        <div key={item.id}>
                            <img src={item.src.large} alt={item.url} style={{width: '100%'}}/>
                        </div>)
                    }
                </div>
                <div className="column">
                    {   state?.photos.map(item=>
                        <div key={item.id}>
                            <img src={item.src.large} alt={item.url} style={{width: '100%'}}/>
                        </div>)
                    }
                </div>
                <div className="column">
                    {   state?.photos.map(item=>
                        <div key={item.id}>
                            <img src={item.src.large} alt={item.url} style={{width: '100%'}}/>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gallery;