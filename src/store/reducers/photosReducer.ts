import { Photo } from "pexels";
import {
  PhotoAction,
  PhotoActionTypes,
  PhotoState,
} from "../../types/photoState";

const initialState: PhotoState = {
  photos: [],
  searchPhotos: [],
  totalCount: 0,
  loading: false,
  isLoaded: false,
  error: null,
  background: [],
};

const photosReducer = (
  state = initialState,
  action: PhotoAction
): PhotoState | undefined => {
  switch (action.type) {
    case PhotoActionTypes.FETCH_PHOTOS:
      return {
        ...state,
        loading: true,
      };
    case PhotoActionTypes.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: true,
      };
    case PhotoActionTypes.RECEIVE_DEFAULT_PHOTOS: {
      const { photos } = action.payload;
      let photosArr: Photo[] = [];
      photosArr = [...state.photos, ...photos];
      return {
        ...state,
        loading: false,
        isLoaded: true,
        error: null,
        photos: photosArr,
      };
    }
    case PhotoActionTypes.RECEIVE_SEARCH_PHOTOS: {
      const { photos } = action.payload;
      let searchPhotosArr: Photo[] = [];
      searchPhotosArr = [...state.searchPhotos, ...photos];
      return {
        ...state,
        loading: false,
        isLoaded: true,
        error: null,
        searchPhotos: searchPhotosArr,
      };
    }
    case PhotoActionTypes.CLEAR_PHOTOS_SEARCH_STATE:
      return {
        ...state,
        searchPhotos: [],
      };
    case PhotoActionTypes.FETCH_PHOTOS_ERROR:
      return {
        ...state,
        loading: false,
        isLoaded: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default photosReducer;
