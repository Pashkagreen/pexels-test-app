import {Photo} from "pexels";
import {PhotoAction, PhotoActionTypes, PhotoState} from "../../types/photo";

const initialState: PhotoState = {
    photos: [],
    loading: false,
    error: null
}

export const photosReducer = (state = initialState, action: PhotoAction): PhotoState | undefined => {
    switch (action.type) {
        case PhotoActionTypes.FETCH_PHOTOS:
            return {
                loading: true,
                error: null,
                photos: []
            }
        case PhotoActionTypes.FETCH_PHOTOS_SUCCESS:
            const {photos} = action.payload;
            return {
                loading: false,
                error: null,
                photos: [...state.photos, ...photos]
            }
        case PhotoActionTypes.FETCH_PHOTOS_ERROR:
            return {
                loading: false,
                error: action.payload,
                photos: [...state.photos]
            }
        default: return state
    }
}