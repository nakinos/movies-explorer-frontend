import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({onBurgerButtonClick}) {

  return (
    <header className="header">
        <Link className="header__logo" to="/" />
        <Navigation />
    </header>
  );
}

export default Header;