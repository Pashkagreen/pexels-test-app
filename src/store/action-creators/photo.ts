import { PhotoAction, PhotoActionTypes } from "../../types/photo";
import { ThunkAction } from "redux-thunk";
import RootState from "../reducer";

const API_KEY = "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf";

export const fetchPhotos = (
  page: number
): ThunkAction<void, RootState, null, PhotoAction> => {
  // const client = createClient(process.env.REACT_APP_API_KEY || '');
  return async (dispatch) => {
    try {
      const photos = await fetch(
        `https://api.pexels.com/v1/curated?page=${page}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: API_KEY,
          },
        }
      );
      const response = await photos.json();
      console.log(response);
      dispatch({
        type: PhotoActionTypes.FETCH_PHOTOS_SUCCESS,
        payload: {
          photos: [...response.photos],
          page: page,
        },
      });
      // }
    } catch (e) {
      console.log(e);
      dispatch({
        type: PhotoActionTypes.FETCH_PHOTOS_ERROR,
        payload: "Error sorry bro",
      });
    }
  };
};

export const searchPhotos = (
  page: number,
  searchQuery: string | undefined | null
): ThunkAction<void, RootState, null, PhotoAction> => {
  // const client = createClient(process.env.REACT_APP_API_KEY || '');
  return async (dispatch) => {
    try {
      const photos = await fetch(
        `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=15&page=${page}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: API_KEY,
          },
        }
      );
      const response = await photos.json();
      console.log(response);
      dispatch({
        type: PhotoActionTypes.FETCH_PHOTOS_SEARCH_SUCCESS,
        payload: {
          searchPhotos: [...response.photos],
          page: page,
        },
      });
      // }
    } catch (e) {
      console.log(e);
      dispatch({
        type: PhotoActionTypes.FETCH_PHOTOS_ERROR,
        payload: "Error sorry bro",
      });
    }
  };
};

export const fetchPhoto = (
  id: number
): ThunkAction<void, RootState, null, PhotoAction> => {
  return async (dispatch) => {
    try {
      const background = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: API_KEY,
        },
      });
      const backgroundImage = await background.json();

      dispatch({
        type: PhotoActionTypes.FETCH_PHOTO_FOR_BACKGROUND,
        payload: [...backgroundImage],
      });
      // }
    } catch (e) {
      console.log(e);
      dispatch({
        type: PhotoActionTypes.FETCH_PHOTOS_ERROR,
        payload: "Error sorry bro",
      });
    }
  };
};
