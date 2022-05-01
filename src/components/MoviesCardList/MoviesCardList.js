import { useEffect, useState } from "react";
import {
  MORE_LENGTH_1280,
  MORE_LENGTH_768,
  MOVIES_API_URL,
  RENDER_LENGTH_1280,
  RENDER_LENGTH_480,
  RENDER_LENGTH_768,
} from "../../constants/constants";
import { mainApi } from "../../utils/MainApi";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ movies, favoriteMovies = [], setFavoriteMovies, pageType }) {
  const [renderedMovies, setRenderedMovies] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [renderLength, setRenderLength] = useState(0);

  useEffect(() => {
    let timeOutId = null;
    const resizeListener = () => {
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => setWidth(window.innerWidth), 150);
    };

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  useEffect(() => {
    if (width >= 1280) {
      setRenderLength(RENDER_LENGTH_1280);
    } else if (width >= 768) {
      setRenderLength(RENDER_LENGTH_768);
    } else {
      setRenderLength(RENDER_LENGTH_480);
    }
  }, [width, movies]);

  useEffect(() => {
    setRenderedMovies(movies.slice(0, renderLength));
  }, [renderLength, movies]);

  function getMore() {
    if (width >= 1280) {
      setRenderLength(renderLength + MORE_LENGTH_1280);
    } else {
      setRenderLength(renderLength + MORE_LENGTH_768);
    }
  }

  function handleLikeButtonClick(card) {
    const isLiked = favoriteMovies.find(({ movieId }) => movieId === card.id);
    if (isLiked) {
      mainApi
        .deleteMovie(isLiked._id)
        .then(() => setFavoriteMovies(favoriteMovies.filter(({ movieId }) => movieId !== card.id)))
        .catch((err) => console.log(err));
    } else {
      mainApi
        .createMovie(card)
        .then((movie) => setFavoriteMovies([...favoriteMovies, movie]))
        .catch((err) => console.log(err));
    }
  }

  function handleDeleteButtonClick(card) {
    mainApi
      .deleteMovie(card._id)
      .then(() => setFavoriteMovies(movies.filter(({ _id }) => _id !== card._id)))
      .catch((err) => console.log(err));
  }

  return (
    <section className="movies-card-list">
      <ul
        className={`movies-card-list__container ${
          pageType === "saved-movies" ? "movies-card-list__container_page_saved-movie" : ""
        }`}>
        {pageType === "saved-movies"
          ? renderedMovies.map((card) => (
              <MoviesCard
                key={card._id}
                card={card}
                duration={card.duration}
                nameRU={card.nameRU}
                imageURL={card.image}
                trailerLink={card.trailerLink}
                pageType={pageType}
                handleButtonClick={handleDeleteButtonClick}
              />
            ))
          : renderedMovies.map((card) => (
              <MoviesCard
                key={card.id}
                card={card}
                duration={card.duration}
                nameRU={card.nameRU}
                trailerLink={card.trailerLink}
                imageURL={`${MOVIES_API_URL}${card.image.url}`}
                pageType={pageType}
                isLiked={favoriteMovies.find(({ movieId }) => movieId === card.id)}
                handleButtonClick={handleLikeButtonClick}
              />
            ))}
      </ul>
      <div
        className={`movies-card-list__more-button-container ${
          renderLength >= movies.length ? "movies-card-list__more-button-container_disabled" : ""
        }`}>
        <button
          className={`movies-card-list__more-button ${
            renderLength >= movies.length ? "movies-card-list__more-button_disabled" : ""
          }`}
          onClick={getMore}>
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
