import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies({ cards }) {
    return (
        <section className="movies">
            <SearchForm />
            <MoviesCardList cards={cards} />
        </section>
    );
}

export default Movies;