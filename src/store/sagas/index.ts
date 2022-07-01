import {
  takeEvery,
  take,
  takeLatest,
  put,
  call,
  spawn,
  all,
} from "@redux-saga/core/effects";
import { PhotoActionTypes } from "../../types/photoState";
import { fetchPhotos, searchPhotos } from "../../api";
import {
  receiveDefaultPhotos,
  receiveSearchPhotos,
  registerError,
} from "../action-creators/photo";
import PhotosResponse from "../../types/photosResponse";

export function* searchDefaultPhotos(action: any) {
  try {
    const photosData: PhotosResponse = yield call(
      fetchPhotos,
      action.currentPage
    );
    yield put(receiveDefaultPhotos(photosData));
  } catch (e) {
    yield take(registerError);
  }
}

export function* searchPhotosByQuery(action: any) {
  const [currentPage, searchWord] = action.payload;
  try {
    const photosData: PhotosResponse = yield call(
      searchPhotos,
      currentPage,
      searchWord
    );
    yield put(receiveSearchPhotos(photosData));
  } catch (e) {
    yield take(registerError);
  }
}

export function* watchDefaultPhotos() {
  yield takeLatest(PhotoActionTypes.FETCH_DEFAULT_PHOTOS, searchDefaultPhotos);
}

export function* watchSearchPhotos() {
  yield takeEvery(PhotoActionTypes.FETCH_SEARCH_PHOTOS, searchPhotosByQuery);
}

export default function* rootSaga() {
  yield all([spawn(watchDefaultPhotos), spawn(watchSearchPhotos)]);
}
