import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({ onSearch, values, handleChange }) {
  function handleOnSubmit(evt) {
    evt.preventDefault();
    onSearch(values);
  }

  return (
    <div className="search-form">
      <div className="search-form__element">
        <form className="search-form__container" onSubmit={handleOnSubmit}>
          <input
            className="search-form__input"
            type="text"
            name="search"
            placeholder="Фильм"
            autoComplete="off"
            required
            onChange={handleChange}
            value={values.search || ""}
          />
          <button className="search-form__button" />
        </form>
        <div className="search-form__filter-container">
          <FilterCheckbox onChange={handleChange} checkbox={values.checkbox}/>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
