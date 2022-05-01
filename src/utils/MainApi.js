import { MAIN_API_URL, MOVIES_API_URL } from "../constants/constants";

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _handleError(res) {
    if (res.ok) {
      return res.json();
    }

    return res.json().then((data) => Promise.reject(data));
  }

  signup({ password, email, name }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({ password, email, name }),
    }).then(this._handleError);
  }

  signin({ password, email }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({ password, email }),
    }).then(this._handleError);
  }

  signout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
    }).then(this._handleError);
  }

  checkToken() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: "include",
    }).then(this._handleError);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: "include",
    }).then(this._handleError);
  }

  editUserInfo({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({ name, email }),
    }).then(this._handleError);
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      credentials: "include",
    }).then(this._handleError);
  }

  createMovie({ id, country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail }) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify({
        country: country || "Пусто",
        director,
        duration,
        year,
        description: description || "Пусто",
        nameRU: nameRU || nameEN,
        nameEN: nameEN || nameRU,
        image: `${MOVIES_API_URL}${image.url}`,
        thumbnail: thumbnail || `${MOVIES_API_URL}${image.url}`,
        trailerLink,
        movieId: id,
      }),
    }).then(this._handleError);
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId} `, {
      method: "DELETE",
      headers: this._headers,
      credentials: "include",
    }).then(this._handleError);
  }
}

export const mainApi = new MainApi({
  baseUrl: MAIN_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
