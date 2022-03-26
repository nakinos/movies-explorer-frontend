import { Link } from 'react-router-dom';
import ProfileButton from '../ProfileButton/ProfileButton';
import './Header.css';

function Header({onBurgerButtonClick}) {

  return (
    <header className="header">
        <Link className="header__logo" to="/" />

        <nav className="header__links">
          <Link className="header__link header__link_active" to="/movies">Фильмы</Link>
          <Link className="header__link" to="/saved-movies">Сохраненнные фильмы</Link>
        </nav>

        <ProfileButton />

        <button className='header__burger-button' onClick={onBurgerButtonClick}></button>
        
    </header>
  );
}

export default Header;