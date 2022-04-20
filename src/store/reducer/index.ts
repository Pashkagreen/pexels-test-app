import { combineReducers } from "redux";
import photosReducer from "./photosReducer";
import wordReducer from "./wordReducer";

export const rootReducer = combineReducers({
  photos: photosReducer,
  word: wordReducer,
});

type RootState = ReturnType<typeof rootReducer>;

export default RootState;
