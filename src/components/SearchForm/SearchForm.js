import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__element">
        <form className="search-form__container">
          <input className="search-form__input" type="text" placeholder="Фильм" autoComplete="off" />
          <button className="search-form__button" />
        </form>
        <div className="search-form__filter-container">
          <FilterCheckbox />
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
