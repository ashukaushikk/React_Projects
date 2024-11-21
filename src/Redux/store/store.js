import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducer/rootReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../saga/rootSaga";

const middleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(middleware));

middleware.run(rootSaga);

export default store;
