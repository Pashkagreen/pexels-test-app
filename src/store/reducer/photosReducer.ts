import {Photo} from "pexels";
import {PhotoAction, PhotoActionTypes, PhotoState} from "../../types/photo";

const initialState: PhotoState = {
    photos: [],
    loading: false,
    error: null,
    background: [],
}

const photosReducer = (state = initialState, action: PhotoAction): PhotoState |  undefined => {
    switch (action.type) {
        case PhotoActionTypes.FETCH_PHOTOS:
            return {
                loading: true,
                error: null,
                photos: [],
                background: []
            }
        case PhotoActionTypes.FETCH_PHOTOS_SUCCESS:
            const {photos} = action.payload;
            let photosArr: Photo[] = []
                photosArr = [...state.photos, ...photos]
            return {
                loading: false,
                error: null,
                photos: photosArr,
                background: []
            }
        case PhotoActionTypes.FETCH_PHOTOS_ERROR:
            return {
                loading: false,
                error: action.payload,
                photos: [...state.photos],
                background: []
            }
        case PhotoActionTypes.FETCH_PHOTO_FOR_BACKGROUND:
            return {
                loading: false,
                error: null,
                photos: [...state.photos],
                background: [...state.background, ...action.payload]
            }
        default: return state
    }
}
export default photosReducer