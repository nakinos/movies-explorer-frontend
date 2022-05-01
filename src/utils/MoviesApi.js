import { MOVIES_API_URL } from "../constants/constants";

class MoviesApi {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
  
    _handleError(res) {
      if (res.ok) {
        return res.json();
      }
  
      return Promise.reject(`Ошибка: ${res.status}. ${res.statusText}`);
    }
  
    getMovies() {
      return fetch(`${this._baseUrl}/beatfilm-movies`, {
        headers: this._headers
      }).then(this._handleError);
    }
  }
  
  export const moviesApi = new MoviesApi({
    baseUrl: MOVIES_API_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  });