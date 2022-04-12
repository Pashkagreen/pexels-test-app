import {Photo} from "pexels";

export interface PhotoState {
    photos: Photo[],
    loading: boolean,
    error: null | string
}

export enum PhotoActionTypes {
    FETCH_PHOTOS = 'FETCH_PHOTOS',
    FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
    FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',
}

interface FetchPhotosAction {
    type: PhotoActionTypes.FETCH_PHOTOS
}
interface FetchPhotosSuccessAction {
    type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS,
    payload: {
        photos: Photo[]
    };
}
interface FetchPhotosErrorAction {
    type: PhotoActionTypes.FETCH_PHOTOS_ERROR,
    payload: string
}
export type PhotoAction = FetchPhotosAction | FetchPhotosSuccessAction | FetchPhotosErrorAction
