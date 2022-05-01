import { useEffect, useState } from "react";
import { useForm } from "../../hooks/useFormValidation";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies({ movies, setFavoriteMovies }) {
  const { values, handleChange, setValues } = useForm({});
  const [searchFormValue, setSearchFormValue] = useState({});
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const moviesSearchValue = localStorage.getItem("favoriteMoviesSearchValue");
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
      setError("Ничего не найдено");
      return;
    }

    setError(null);
    setFilteredMovies(filteredMoviesCollection);
  }, [searchFormValue, movies]);

  function handleOnSearch(formValue) {
    setIsLoading(true);
    localStorage.setItem("favoriteMoviesSearchValue", JSON.stringify(formValue));
    setSearchFormValue(formValue);
    setIsLoading(false);
  }

  return (
    <section className="saved-movies">
      <SearchForm onSearch={handleOnSearch} values={values} handleChange={handleChange} />
      {isLoading && <Preloader />}
      {error && <p className="movies__eroor-text">{error}</p>}
      {!error && filteredMovies.length > 0 && <MoviesCardList movies={filteredMovies} setFavoriteMovies={setFavoriteMovies} pageType="saved-movies" />}
    </section>
  );
}

export default SavedMovies;
