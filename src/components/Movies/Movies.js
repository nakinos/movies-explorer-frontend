import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";
import { useForm } from "../../hooks/useFormValidation";
import { useState, useEffect } from "react";
import { moviesApi } from "../../utils/MoviesApi";
import { MOVIES_ERROR, MOVIES_ZERO } from "../../constants/constants";

function Movies({ favoriteMovies, setFavoriteMovies }) {
  const { values, handleChange, setValues } = useForm({});
  const [searchFormValue, setSearchFormValue] = useState({});
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cachedAllMovies = localStorage.getItem("allMovies");
    if (cachedAllMovies) {
      setMovies(JSON.parse(cachedAllMovies));
    }
  }, []);

  useEffect(() => {
    const moviesSearchValue = localStorage.getItem("allMoviesSearchValue");
    if (moviesSearchValue) {
      const parsedValue = JSON.parse(moviesSearchValue);
      setValues(parsedValue);
      setSearchFormValue(parsedValue);
    }
  }, []);

  useEffect(() => {
    const nameFilter = searchFormValue.search ? new RegExp(searchFormValue.search, "i") : null;
    const filteredMoviesCollection = movies
      .filter(({ duration }) => (searchFormValue.checkbox ? duration < 40 : true))
      .filter(({ nameRU }) => (nameFilter ? nameFilter.test(nameRU) : true));

    if (filteredMoviesCollection.length === 0) {
      setFilteredMovies([]);
      setError(MOVIES_ZERO);
      return;
    }

    setError(null);
    setFilteredMovies(filteredMoviesCollection);
  }, [searchFormValue, movies]);

  function handleOnSearch(formValue) {
    setIsLoading(true);
    localStorage.setItem("allMoviesSearchValue", JSON.stringify(formValue));
    setSearchFormValue(formValue);

    if (movies.length === 0) {
      moviesApi
        .getMovies()
        .then((movies) => {
          setMovies(movies);
          localStorage.setItem("allMovies", JSON.stringify(movies));
        })
        .catch((err) => setError(MOVIES_ERROR))
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }

  return (
    <section className="movies">
      <SearchForm onSearch={handleOnSearch} values={values} handleChange={handleChange} />
      {isLoading && <Preloader />}
      {error && <p className="movies__eroor-text">{error}</p>}
      {!error && filteredMovies.length > 0 && (
        <MoviesCardList movies={filteredMovies} favoriteMovies={favoriteMovies} setFavoriteMovies={setFavoriteMovies} />
      )}
    </section>
  );
}

export default Movies;
