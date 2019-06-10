import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from 'redux-saga';
import { asyncReducer, todoReducer, newsReducer } from "./reducers";
import thunk from "redux-thunk";
import { logger } from 'redux-logger';
import rootSaga from './sagas';

const rootReducer = combineReducers({
    asyncReducer,
    todoReducer,
    newsReducer
    // defaultState, // key name same as the carefully renamed default export
    // firstState: firstNamedReducer, // specific key name instead of the variable name
    // secondState // key name same as the carefully renamed named export
})

const sagaMiddleware = createSagaMiddleware();


// const store = createStore(rootReducer, applyMiddleware(thunk));

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);


export default store;