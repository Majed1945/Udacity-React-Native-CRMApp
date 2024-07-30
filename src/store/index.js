import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import reducer from "./reducers";
import rootSaga from "./sagas";

const initializeStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const loggerMiddleware = createLogger();

  const store = configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware, loggerMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default initializeStore;
