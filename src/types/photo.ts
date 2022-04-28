import { Photo } from "pexels";

export interface PhotoState {
  photos: Photo[];
  searchPhotos: Photo[];
  loading: boolean;
  isLoaded: boolean;
  error: null | string;
  background: Photo[];
}

export enum PhotoActionTypes {
  FETCH_PHOTOS = "FETCH_PHOTOS",
  FETCH_PHOTOS_SUCCESS = "FETCH_PHOTOS_SUCCESS",
  FETCH_PHOTOS_SEARCH_SUCCESS = "FETCH_PHOTOS_SEARCH_SUCCESS",
  FETCH_PHOTOS_ERROR = "FETCH_PHOTOS_ERROR",
  FETCH_PHOTO_FOR_BACKGROUND = "FETCH_PHOTO_FOR_BACKGROUND",
}

interface FetchPhotosAction {
  type: PhotoActionTypes.FETCH_PHOTOS;
}
interface FetchPhotosSuccessAction {
  type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS;
  payload: {
    photos: Photo[];
    page: number;
  };
}
interface SearchPhotosSuccessAction {
  type: PhotoActionTypes.FETCH_PHOTOS_SEARCH_SUCCESS;
  payload: {
    searchPhotos: Photo[];
    page: number;
  };
}
interface FetchPhotosErrorAction {
  type: PhotoActionTypes.FETCH_PHOTOS_ERROR;
  payload: string;
}

interface FetchPhotoForBackground {
  type: PhotoActionTypes.FETCH_PHOTO_FOR_BACKGROUND;
  payload: Photo[];
}
export type PhotoAction =
  | FetchPhotosAction
  | FetchPhotosSuccessAction
  | FetchPhotosErrorAction
  | FetchPhotoForBackground
  | SearchPhotosSuccessAction;
