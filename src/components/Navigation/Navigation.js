import { useState } from "react";
import "./Navigation.css";
import ProfileButton from "../ProfileButton/ProfileButton";
import { Link } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";
import { Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navigation() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const openSideMenu = () => {
    setIsSideMenuOpen(true);
  };

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <Switch>
      <Route path="/" exact>
        <div className="navigation__login-container">
          <Link to="/signup" className="navigation__signup">
            Регистрация
          </Link>
          <Link to="/signin" className="navigation__signin">
            Войти
          </Link>
        </div>
      </Route>
      <Route path="*">
        <nav className="navigation__links">
          <NavLink className="navigation__link" to="/movies" exact activeClassName="navigation__link_active">
            Фильмы
          </NavLink>
          <NavLink className="navigation__link" to="/saved-movies" exact activeClassName="navigation__link_active">
            Сохраненнные фильмы
          </NavLink>
        </nav>
        <ProfileButton className="navigation__profile-button" />
        <button className="navigation__burger-button" onClick={openSideMenu}></button>
        <SideMenu isOpen={isSideMenuOpen} onCloseClick={closeSideMenu} />
      </Route>
    </Switch>
  );
}

export default Navigation;
