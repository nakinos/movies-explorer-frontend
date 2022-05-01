import { useState } from "react";
import "./MoviesCard.css";

function MoviesCard({ card, pageType }) {
  const hour = Math.floor(140 / 60);
  const minutes = card.duration % 60;

  const [isLiked, setIsLiked] = useState(false);

  function onButtonClickHandle() {
      if (pageType !== 'saved-movies') {
        setIsLiked(!isLiked);
      } else {
          // TODO remove handle
      }
  }

  const buttonClassName = pageType !== 'saved-movies' ? 'movies-card__button movies-card__button_type_like' : 
    'movies-card__button_type_delete';

  return (
    <li className="movies-card">
      <img className="movies-card__image" alt={card.nameRU} src={`https://api.nomoreparties.co/${card.image.url}`} />
      <div className="movies-card__info-container">
        <div className="movies-card__name-container">
          <h2 className="movies-card__name">{card.nameRU}</h2>
          <button
            className={`movies-card__button ${buttonClassName} ${
              isLiked && "movies-card__button_type_like_active"
            }`}
            onClick={onButtonClickHandle}
          />
        </div>
        <span className="movies-card__duration">
          {hour}ч {minutes}м
        </span>
      </div>
    </li>
  );
}

export default MoviesCard;
