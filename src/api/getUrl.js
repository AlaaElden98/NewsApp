import {Config} from 'react-native-config';

const API_KEY = Config.API_KEY;
const BASE_URL = 'https://newsapi.org';
const HEADLINES_ENDPOINT = '/v2/top-headlines';
const SOURCE_ENDPOINT = '/v2/top-headlines/sources';
const sourceHeadlinesUrl = 'https://newsapi.org/v2/everything?sources';

export const getSourcesHeadlines = (source_id, page = 1) => {
  return sourceHeadlinesUrl + `=${source_id}&page=${page}&apiKey=${API_KEY}`;
};

export const getSourcesUrl = () => {
  return BASE_URL + SOURCE_ENDPOINT + `?apiKey=${API_KEY}`;
};

export const getTopHeadlines = (page = 1, country, category) => {
  return (
    BASE_URL +
    HEADLINES_ENDPOINT +
    `?country=${country}` +
    `&category=${category}` +
    `&page=${page}` +
    `&apiKey=${API_KEY}`
  );
};
