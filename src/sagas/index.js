import { put, takeLatest, all, takeEvery, call } from 'redux-saga/effects';
import { GET_NEWS, NEWS_RECEIVED } from '../actions/types'
import { receiveNews } from '../actions/newsActions'

//news-saga
function* fetchNews() {
    const json = yield fetch("https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc")
        .then(response => response.json());
    yield put(
        { type: NEWS_RECEIVED, articles: json.articles });
}

function* actionWatcher() {
    yield takeLatest(GET_NEWS, fetchNews)
}

//counter-saga
export const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* incrementAsync() {
    yield call(delay, 1000)
    yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
        watchIncrementAsync()
    ]);
}