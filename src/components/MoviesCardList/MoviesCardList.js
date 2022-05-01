import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ cards, moreButtonDisabled, pageType }) {
  return (
    <section className="movies-card-list">
      <ul className={`movies-card-list__container ${pageType === 'saved-movies' && 'movies-card-list__container_page_saved-movie'}`}>
        {cards.map((card) => (
          <MoviesCard key={card.id} card={card} pageType={pageType} />
        ))}
      </ul>
      <div
        className={`movies-card-list__more-button-container ${
          moreButtonDisabled && "movies-card-list__more-button-container_disabled"
        }`}>
        <button
          className={`movies-card-list__more-button ${moreButtonDisabled && "movies-card-list__more-button_disabled"}`}>
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
