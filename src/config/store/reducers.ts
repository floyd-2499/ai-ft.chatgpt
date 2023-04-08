import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { getChatReducer } from "../../api/chatgpt/reducers";
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    getChat: getChatReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga)

export default store