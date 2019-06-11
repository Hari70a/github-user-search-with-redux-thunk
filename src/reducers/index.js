import asyncReducer from './asyncReducer'
import todoReducer from './todoReducer'
import newsReducer from './newsReducer'
import counterReducer from './counterReducer'
import { combineReducers } from "redux";

// export default {
//     lastAction,
//     currentUser,
//     groupChatCount,
//     groupsV2, usersV2,
//     feed,
//     imagesList
// }
export default combineReducers({ asyncReducer, todoReducer, newsReducer, counterReducer })