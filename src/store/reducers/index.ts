import { combineReducers } from "redux";
import photosReducer from "./photosReducer";
import wordReducer from "./wordReducer";
import langReducer from "./langReducer";

export const rootReducer = combineReducers({
  photos: photosReducer,
  word: wordReducer,
  lang: langReducer,
});

type RootState = ReturnType<typeof rootReducer>;

export default RootState;
