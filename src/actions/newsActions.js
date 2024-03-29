import { GET_NEWS, NEWS_RECEIVED } from './types'

export const getNews = () => ({
    type: GET_NEWS,
});

export const receiveNews = (articles) => ({
    type: NEWS_RECEIVED,
    articles: articles[0]
});
