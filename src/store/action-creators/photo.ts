import {createClient, PhotosWithTotalResults, Photos, Photo, ErrorResponse} from 'pexels';
import {PhotoAction, PhotoActionTypes} from "../../types/photo";
import {Dispatch} from "redux";
import {RootState} from "../reducer";

const API_KEY = '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf'
const client = createClient(API_KEY);


export const fetchPhotos = (page: number) => {
    return async (dispatch: Dispatch<PhotoAction>) => {
        try {
            dispatch({type: PhotoActionTypes.FETCH_PHOTOS, })
            const response = await client.photos.curated({ page, per_page: 10 });
            dispatch({type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS, payload: {
                photos: photos.photos,

                }})

            console.log(response)
        } catch (e) {
            console.log(e)
            dispatch({type: PhotoActionTypes.FETCH_PHOTOS_ERROR, payload: 'Error sorry bro'})
        }
    }
}