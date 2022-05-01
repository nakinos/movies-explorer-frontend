import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../../hooks/useFormValidation";
import "./Profile.css";

function Profile({ onLogOut, message, isError, onEdit, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange, setValues } = useFormWithValidation({
    email: currentUser.email,
    name: currentUser.name,
  }, true);
  const [isValueChange, setIsValueChange] = useState(false);

  function handleOnEdit(evt) {
    evt.preventDefault();
    onEdit({ name: values.name, email: values.email});
  }

  function checkValues() {
    setIsValueChange(currentUser.email !== values.email || currentUser.name !== values.name);
  }

  useEffect(() => {
    checkValues();
  }, [handleChange]);

  useEffect(() => {
    if (currentUser) {
      const { email, name } = currentUser;
      setValues({ ...values, email, name});
    }
  }, [currentUser]);

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form className="profile__form">
        <div className="profile__field-container">
          <div className="profile__field">
            <label className="profile__input-caption">Имя</label>
            <input
              className={`profile__input profile__input_type_name ${errors.name && "profile__input_error"}`}
              type="text"
              name="name"
              autoComplete="off"
              required
              minLength={2}
              maxLength={30}
              value={values.name || ""}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>
          <span className="profile__error">{errors.name}</span>
        </div>
        <div className="profile__field-container">
          <div className="profile__field">
            <label className="profile__input-caption">E-mail</label>
            <input
              className={`profile__input profile__input_type_email ${errors.email && "profile__input_error"}`}
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              required
              value={values.email || ""}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>
          <span className="profile__error">{errors.email}</span>
        </div>
        <span className={`profile__message ${isError && "profile__message_error"}`}>{message}</span>
      </form>
      <div className="profile__button-container">
        <button
          className={`profile__button profile__button_type_edit ${!isValid || !isValueChange ? "profile__button_disabled" : ""}`}
          onClick={handleOnEdit}
          disabled={!isValid || !isValueChange || isLoading}>
          Редактировать
        </button>
        <button className="profile__button profile__button_type_signout" onClick={onLogOut}>
          Выйти из аккаунта
        </button>
      </div>
    </section>
  );
}

export default Profile;
