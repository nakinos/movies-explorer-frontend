import { useFormWithValidation } from "../../hooks/useFormValidation";
import AuthForm from "../AuthForm/AuthForm";

function Login({ onLogin, errorMessage, isLoading }) {
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation({}, true);

  function handleOnSubmit(evt) {
    evt.preventDefault();
    onLogin({ email: values.email, password: values.password }, resetForm);
  }

  return (
    <AuthForm
      handleSubmit={handleOnSubmit}
      name="login"
      title="Рады видеть!"
      submitButtonCaption="Войти"
      text="Ещё не зарегистрированы?"
      linkText="Регистрация"
      linkTo="/signup"
      isValid={isValid}
      errorMessage={errorMessage}
      isLoading={isLoading}>
      <div className="auth-form__field">
        <label className="auth-form__input-caption">E-mail</label>
        <input
          className={`auth-form__input auth-form__input_type_email ${errors.email && "auth-form__input_error"}`}
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          required
          onChange={handleChange}
          value={values.email || ""}
          disabled={isLoading}
        />
        <span className="auth-form__input-error">{errors.email}</span>
      </div>
      <div className="auth-form__field">
        <label className="auth-form__input-caption">Пароль</label>
        <input
          className={`auth-form__input auth-form__input_type_password ${errors.password && "auth-form__input_error"}`}
          type="password"
          name="password"
          autoComplete="off"
          required
          onChange={handleChange}
          value={values.password || ""}
          disabled={isLoading}
        />
        <span className="auth-form__input-error">{errors.password}</span>
      </div>
    </AuthForm>
  );
}

export default Login;
