import { combineReducers } from "redux";
import photosReducer from "./photosReducer";
import langReducer from "./langReducer";

export const rootReducer = combineReducers({
  photos: photosReducer,
  lang: langReducer,
});

type RootState = ReturnType<typeof rootReducer>;

export default RootState;
