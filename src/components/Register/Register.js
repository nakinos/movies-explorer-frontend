import { useFormWithValidation } from "../../hooks/useFormValidation";
import AuthForm from "../AuthForm/AuthForm";

function Register({ onRegister, errorMessage, isLoading }) {
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation({}, true);

  function handleOnSubmit(evt) {
    evt.preventDefault();
    onRegister({ name: values.name, email: values.email, password: values.password }, resetForm);
  }

  return (
    <AuthForm
      handleSubmit={handleOnSubmit}
      name="register"
      title="Добро пожаловать!"
      submitButtonCaption="Зарегистрироваться"
      text="Уже зарегистрированы?"
      linkText="Войти"
      linkTo="/signin"
      isValid={isValid}
      errorMessage={errorMessage}
      isLoading={isLoading}>
      <div className="auth-form__field">
        <label className="auth-form__input-caption">Имя</label>
        <input
          className={`auth-form__input auth-form__input_type_name ${errors.name && "auth-form__input_error"}`}
          type="text"
          name="name"
          minLength={2}
          maxLength={30}
          autoComplete="off"
          required
          onChange={handleChange}
          value={values.name || ""}
          disabled={isLoading}
        />
        <span className="auth-form__input-error">{errors.name}</span>
      </div>
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

export default Register;
