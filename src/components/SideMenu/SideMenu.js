import "./SideMenu.css";
import ProfileButton from "../ProfileButton/ProfileButton";
import { NavLink } from "react-router-dom";

function SideMenu({ isOpen, onCloseClick }) {
  const onOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) onCloseClick();
  };

  return (
    <div className={`side-menu ${isOpen && "side-menu_active"}`} onClick={onOverlayClick}>
      <div className={`side-menu__container ${isOpen && "side-menu__container_active"}`}>
        <button className="side-menu__close-button" type="button" aria-label="Закрыть" onClick={onCloseClick}></button>
        <nav className="side-menu__nav">
          <ul className="side-menu__list">
            <li>
              <NavLink to="/" exact className="side-menu__link" activeClassName="side-menu__link_active">
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" exact className="side-menu__link" activeClassName="side-menu__link_active">
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink to="/saved-movies" exact className="side-menu__link" activeClassName="side-menu__link_active">
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <ProfileButton />
        </nav>
      </div>
    </div>
  );
}

export default SideMenu;
