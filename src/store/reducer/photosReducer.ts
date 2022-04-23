import { Photo } from "pexels";
import { PhotoAction, PhotoActionTypes, PhotoState } from "../../types/photo";

const initialState: PhotoState = {
  photos: [],
  searchPhotos: [],
  loading: false,
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
        loading: true,
        error: null,
        photos: [],
        searchPhotos: [],
        background: [],
      };
    case PhotoActionTypes.FETCH_PHOTOS_SUCCESS:
      const { photos } = action.payload;
      let photosArr: Photo[] = [];
      photosArr = [...state.photos, ...photos];
      return {
        loading: false,
        error: null,
        photos: photosArr,
        searchPhotos: [],
        background: [],
      };
    case PhotoActionTypes.FETCH_PHOTOS_SEARCH_SUCCESS:
      const { searchPhotos } = action.payload;
      let searchPhotosArr: Photo[] = [];
      searchPhotosArr = [...state.searchPhotos, ...searchPhotos];
      return {
        photos: [...state.photos],
        loading: false,
        error: null,
        searchPhotos: searchPhotosArr,
        background: [],
      };
    case PhotoActionTypes.FETCH_PHOTOS_ERROR:
      return {
        loading: false,
        error: action.payload,
        photos: [...state.photos],
        background: [],
        searchPhotos: [...state.searchPhotos],
      };
    case PhotoActionTypes.FETCH_PHOTO_FOR_BACKGROUND:
      return {
        loading: false,
        error: null,
        photos: [...state.photos],
        background: [...state.background, ...action.payload],
        searchPhotos: [...state.searchPhotos],
      };
    default:
      return state;
  }
};
export default photosReducer;
