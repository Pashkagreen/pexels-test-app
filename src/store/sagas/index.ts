import {
  takeEvery,
  takeLatest,
  put,
  call,
  fork,
  spawn,
  all,
} from "@redux-saga/core/effects";
import { PhotoActionTypes } from "../../types/photo";

//spawn - noblock, создает параллельную задачу в корне саги
export function* handleLatestNews() {
  try {
    console.log("search fetch success");
  } catch {
    console.log("e");
  }
}
export function* handlePopularNews() {
  try {
    console.log("photos fetched");
  } catch {
    console.log("e");
  }
}

export function* watchPopularSaga() {
  yield takeEvery(PhotoActionTypes.FETCH_PHOTOS, handlePopularNews);
}
export function* watchLatestSaga() {
  yield takeEvery(PhotoActionTypes.FETCH_PHOTOS_SUCCESS, handleLatestNews);
}

export default function* rootSaga() {
  yield all([fork(watchPopularSaga), fork(watchLatestSaga)]);
}
