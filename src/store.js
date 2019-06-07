import { createStore, applyMiddleware, combineReducers } from "redux";
import { asyncReducer, todoReducer } from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    asyncReducer, todoReducer
    // defaultState, // key name same as the carefully renamed default export
    // firstState: firstNamedReducer, // specific key name instead of the variable name
    // secondState // key name same as the carefully renamed named export
})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;