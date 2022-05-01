import "./NotFound.css";

function NotFound({ onBackButtonHandle }) {
  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button onClick={onBackButtonHandle} className="not-found__button">
        Назад
      </button>
    </div>
  );
}

export default NotFound;
