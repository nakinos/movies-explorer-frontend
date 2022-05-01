import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ loggedIn }) {

  return (
    <header className="header">
        <Link className="header__logo" to="/" />
        <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;