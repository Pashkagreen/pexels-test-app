import { Photo } from "pexels";

export interface PhotoState {
  photos: Photo[];
  searchPhotos: Photo[];
  totalCount: number;
  loading: boolean;
  isLoaded: boolean;
  error: null | string;
}

export enum PhotoActionTypes {
  FETCH_DEFAULT_PHOTOS = "FETCH_DEFAULT_PHOTOS",
  FETCH_SEARCH_PHOTOS = "FETCH_SEARCH_PHOTOS",
  CLEAR_PHOTOS_SEARCH_STATE = "CLEAR_PHOTOS_SEARCH_STATE",
  FETCH_PHOTOS_ERROR = "FETCH_PHOTOS_ERROR",
  RECEIVE_DEFAULT_PHOTOS = "RECEIVE_DEFAULT_PHOTOS",
  RECEIVE_SEARCH_PHOTOS = "RECEIVE_SEARCH_PHOTOS",
}

interface FetchPhotosAction {
  type: PhotoActionTypes.FETCH_DEFAULT_PHOTOS;
}

interface FetchPhotosSuccessAction {
  type: PhotoActionTypes.FETCH_SEARCH_PHOTOS;
  payload: {
    photos: Photo[];
    page: number;
  };
}

interface SearchDefaultPhotosSuccessAction {
  type: PhotoActionTypes.RECEIVE_DEFAULT_PHOTOS;
  payload: {
    photos: Photo[];
    page: number;
    totalCount: number;
  };
}

interface SearchPhotosSuccessAction {
  type: PhotoActionTypes.RECEIVE_SEARCH_PHOTOS;
  payload: {
    photos: Photo[];
    page: number;
    totalCount: number;
  };
}

interface ClearPhotosSearchState {
  type: PhotoActionTypes.CLEAR_PHOTOS_SEARCH_STATE;
  payload: {
    searchPhotos: Photo[];
  };
}

interface FetchPhotosErrorAction {
  type: PhotoActionTypes.FETCH_PHOTOS_ERROR;
  payload: string;
}

export type PhotoAction =
  | FetchPhotosAction
  | FetchPhotosSuccessAction
  | FetchPhotosErrorAction
  | SearchPhotosSuccessAction
  | ClearPhotosSearchState
  | SearchDefaultPhotosSuccessAction;
