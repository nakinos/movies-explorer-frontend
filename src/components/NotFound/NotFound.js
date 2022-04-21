import { Link, useHistory } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const history = useHistory();

  function backButtonClick() {
    history.goBack();
  }

  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>
      <Link to="" onClick={backButtonClick} className="not-found__link">
        Назад
      </Link>
    </div>
  );
}

export default NotFound;
