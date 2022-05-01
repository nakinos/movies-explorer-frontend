import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="switch-checkbox">
      <label className="switch-checkbox__switch" htmlFor="checkbox">
        <input className="switch-checkbox__input" type="checkbox" id="checkbox" />
        <div className="switch-checkbox__slider"></div>
      </label>
      <span className="switch-checkbox__caption">Короткометражки</span>
    </div>
  );
}

export default FilterCheckbox;
