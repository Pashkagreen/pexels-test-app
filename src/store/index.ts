//Store initialisation
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducer";

export const store = createStore(rootReducer, applyMiddleware(thunk));
