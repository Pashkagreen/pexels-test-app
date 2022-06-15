//Store initialisation
// import thunk from "redux-thunk";
// import { applyMiddleware, createStore } from "redux";
// import { rootReducer } from "./reducers";
//
// export const store = createStore(rootReducer, applyMiddleware(thunk));

import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers/index";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize..
      })
    : compose;

const configureStore = (preloadedState: any) =>
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
//1
const store = configureStore({});
//2
sagaMiddleware.run(rootSaga);

export default store;
