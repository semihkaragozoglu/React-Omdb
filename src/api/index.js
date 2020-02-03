import { httpClient } from './httpClient';
import { localApi } from './todosApi';
import { moviesApi } from './moviesApi';

export function apiFactory(http) {
  return {
    local: localApi(http)
  };
}
export function apiOmdbFactory(http) {
  return {
    movies: moviesApi(http)
  };
}

const http = httpClient('http://localhost:3000');
const httpOmdb = httpClient('http://www.omdbapi.com/?apikey=c4f93612&');
const api = apiFactory(http);
const apiOmdb = apiOmdbFactory(httpOmdb);
export {api, apiOmdb}; 

