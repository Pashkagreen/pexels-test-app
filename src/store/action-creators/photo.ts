import { PhotoActionTypes } from "../../types/photoState";
import PhotosResponse from "../../types/photosResponse";

export const receiveDefaultPhotos = (photosData: PhotosResponse) => ({
  type: PhotoActionTypes.RECEIVE_DEFAULT_PHOTOS,
  payload: photosData,
});

export const receiveSearchPhotos = (photosData: PhotosResponse) => ({
  type: PhotoActionTypes.RECEIVE_SEARCH_PHOTOS,
  payload: photosData,
});

export const registerError = (error: string) => ({
  type: PhotoActionTypes.FETCH_PHOTOS_ERROR,
  payload: error,
});

// export const fetchPhoto = (
//   id: number
// ): ThunkAction<void, RootState, null, PhotoAction> => {
//   return async (dispatch) => {
//     try {
//       const background = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           Authorization: API_KEY,
//         },
//       });
//       const backgroundImage = await background.json();
//
//       dispatch({
//         type: PhotoActionTypes.FETCH_PHOTO_FOR_BACKGROUND,
//         payload: [...backgroundImage],
//       });
//       // }
//     } catch (e) {
//       console.log(e);
//       dispatch({
//         type: PhotoActionTypes.FETCH_PHOTOS_ERROR,
//         payload: "Error sorry bro",
//       });
//     }
//   };
// };
