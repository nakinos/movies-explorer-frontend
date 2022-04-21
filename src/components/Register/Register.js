import AuthForm from "../AuthForm/AuthForm";

function Register({ handleSubmit }) {
  return (
    <AuthForm
        handleSubmit = {handleSubmit}
        name="register"
        title="Добро пожаловать!"
        submitButtonCaption="Зарегистрироваться"
        text="Уже зарегистрированы?"
        linkText="Войти"
        linkTo="/signin">
        <div className="auth-form__field">
            <label className="auth-form__input-caption">Имя</label>
            <input
              className="auth-form__input auth-form__input_type_name"
              type="text"
              name="name"
              autoComplete="off"
              required
              // onChange={handleChange}
            />
            <span className="auth-form__input-error"></span>
          </div>
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

export default Register;
