import './ProfileButton.css';
import { Link } from 'react-router-dom';
import profileLogo from '../../images/account.svg';

function ProfileButton({ className }) {
  return (
    <Link to="/profile" className={`profile-button ${className}`}>
        <span className='profile-button__text'>Аккаунт</span>
        <div className="profile-button__logo">
        <img src={profileLogo} className="profile-button__logo-img" alt="Профиль"></img>
        </div>
    </Link>
  );
}

export default ProfileButton;