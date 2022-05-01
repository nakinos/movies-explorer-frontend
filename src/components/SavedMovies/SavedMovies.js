import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies({ cards }) {
    return (
        <section className="saved-movies">
            <SearchForm />
            <MoviesCardList cards={cards} pageType="saved-movies" moreButtonDisabled/>
        </section>
    );
}

export default SavedMovies;