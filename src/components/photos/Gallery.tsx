import React, {useEffect, useState} from 'react';
import './Gallery.scss'
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchPhotos, searchPhotos} from "../../store/action-creators/photo";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Spinner from "../Spinner";


const Gallery:React.FC = () => {
    const dispatch = useDispatch()
    const state = useTypedSelector(state => state.photos)
    const [like, setLike] = useState(false)
    const [showInfo, setShowInfo] = useState(false)


    const photoLike = (prev: boolean) => {
        setLike(prev => !prev)
    }

    const onMouseEnter = () => {
        setShowInfo(true)
    }
    const onMouseLeave = () => {
        setShowInfo(false)
    }

    return (
        <div className='container'>
            <span>Бесплатные стоковые фото</span>
            <div className="row">
                    {   state?.photos.map(item=>
                            <div key={item.id} className='column' onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave}>
                                {   (state?.loading) ? <Spinner/> :
                                    <img src={item.src.large} alt={item.photographer} style={{width: '100%'}}
                                         className='search-img'/>
                                }
                                <div className="photo-info" style={showInfo ? {display: 'flex'} : undefined}>
                                    <a href={item.photographer_url}>Photo by {item.photographer}</a>
                                        <div className="photo-icons">
                                        <a className='download-icon' href={`https://www.pexels.com/photo/${item.id}/download`}><FileDownloadOutlinedIcon fontSize={'large'}/></a>
                                        <div className="like-icon" onClick={(e) => photoLike(like)}>
                                    {
                                        like ? <FavoriteIcon fontSize={"large"} style={{color: "red"}}/> : <FavoriteBorderIcon fontSize={'large'} style={{color:'white'}}/>
                                    }
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
            </div>
        </div>
    );
};

export default Gallery;