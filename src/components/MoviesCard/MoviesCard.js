import "./MoviesCard.css";

function MoviesCard({ card, trailerLink, duration, nameRU, imageURL, pageType, isLiked, handleButtonClick }) {
  const hour = Math.floor(duration / 60);
  const minutes = duration % 60;
  const buttonClassName =
    pageType !== "saved-movies"
      ? "movies-card__button movies-card__button_type_like"
      : "movies-card__button_type_delete";
  
    function onButtonClick(evt) {
      evt.preventDefault();
      handleButtonClick(card);
    }

  return (
    <li className="movies-card">
      <a className="movies-card__link" href={trailerLink} target="_blank" rel="noreferrer">
        <img className="movies-card__image" alt={nameRU} src={imageURL} />
        <div className="movies-card__info-container">
          <div className="movies-card__name-container">
            <h2 className="movies-card__name">{nameRU}</h2>
            <button
              className={`movies-card__button ${buttonClassName} ${isLiked && "movies-card__button_type_like_active"}`}
              onClick={onButtonClick}
            />
          </div>
          <span className="movies-card__duration">
            {hour}ч {minutes}м
          </span>
        </div>
      </a>
    </li>
  );
}

export default MoviesCard;
