import './Navigation.css';
import ProfileButton from '../ProfileButton/ProfileButton';
import { Link } from 'react-router-dom';

function Navigation({ isOpen, onCloseClick }) {

    const onOverlayClick = (evt) => {
        if (evt.target === evt.currentTarget) onCloseClick();
    };

    return (
    <div className={`navigation ${isOpen && 'navigation_active'}`} onClick={onOverlayClick}>
        <div className={`navigation__side-menu ${isOpen && 'navigation__side-menu_active'}`}>
            <button className="navigation__close-button" type="button" aria-label="Закрыть" onClick={onCloseClick}></button>
            <nav className='navigation__side-menu-nav'>
                <ul className='navigation__side-menu-list'>
                    <li>Главная</li>
                    <li>Фильмы</li>
                    <li>Сохранённые фильмы</li>
                </ul>
                <ProfileButton />
            </nav>
        </div>
    </div>
    );
}

export default Navigation;