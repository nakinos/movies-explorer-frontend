import AuthForm from "../AuthForm/AuthForm";

function Login({ handleSubmit }) {
  return (
    <AuthForm
        handleSubmit = {handleSubmit}
        name="login"
        title="Рады видеть!"
        submitButtonCaption="Войти"
        text="Ещё не зарегистрированы?"
        linkText="Регистрация"
        linkTo="/signup">
          <div className="auth-form__field">
            <label className="auth-form__input-caption">E-mail</label>
            <input
              className="auth-form__input auth-form__input_type_email"
              type="email"
              name="email"
              autoComplete="off"
              required
              // onChange={handleChange}
            />
            <span className="auth-form__input-error"></span>
          </div>
          <div className="auth-form__field">
            <label className="auth-form__input-caption">Пароль</label>
            <input
              className="auth-form__input auth-form__input_type_password auth-form__input_error"
              type="password"
              name="password"
              autoComplete="off"
              required
              // onChange={handleChange}
            />
            <span className="auth-form__input-error">Что-то пошло не так...</span>
          </div>
    </AuthForm>
  );
}

export default Login;
