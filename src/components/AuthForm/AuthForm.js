import { Link } from "react-router-dom";
import "./AuthForm.css";

function AuthForm({ children, name, title, submitButtonCaption, text, linkText, linkTo, handleSubmit, isValid, errorMessage, isLoading }) {
  return (
    <section className={`auth-form auth-form_type_${name}`}>
      <div className="auth-form__top-container">
        <Link className="auth-form__logo" to="/" />
        <h1 className="auth-form__title">{title}</h1>
      </div>
      <form className="auth-form_form" noValidate>
        <fieldset className="auth-form__input-container">{children}</fieldset>
        <span className="auth-form__input-error">{errorMessage}</span>
      </form>
      <div className="auth-form__bottom-container">
        <button
          className={`auth-form__submit-button ${!isValid && "auth-form__submit-button_disabled"}`}
          type="submit"
          disabled={!isValid || isLoading}
          onClick={handleSubmit}>
          {submitButtonCaption}
        </button>
        <p className="auth-form__text">
          {`${text} `}
          <Link className="auth-form__link" to={linkTo}>
            {linkText}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default AuthForm;
