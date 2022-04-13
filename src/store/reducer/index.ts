import {combineReducers} from "redux";
import photosReducer from "./photosReducer";

export const rootReducer = combineReducers({
    photos: photosReducer
})

type RootState = ReturnType<typeof rootReducer>

export default RootState