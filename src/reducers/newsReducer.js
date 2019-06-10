import { GET_NEWS, NEWS_RECEIVED } from '../actions/types'
const newsReducer = (state = {}, action) => {
    // console.log(action, "action")
    switch (action.type) {
        case GET_NEWS:
            return { ...state, loading: true };
        case NEWS_RECEIVED:
            return { ...state, news: action.articles[0], loading: false }
        default:
            return state;
    }
};

export default newsReducer