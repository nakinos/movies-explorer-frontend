import "./Profile.css";

function Profile({ handleSubmit }) {
  function onChangeField() {
    // TODO: реализовать state
  }

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <div className="profile__field">
          <label className="profile__input-caption">Имя</label>
          <input
            className="profile__input profile__input_type_name"
            type="text"
            name="name"
            autoComplete="off"
            required
            value="Виталий"
            onChange={onChangeField}
          />
        </div>
        <div className="profile__field">
          <label className="profile__input-caption">E-mail</label>
          <input
            className="profile__input profile__input_type_email"
            type="email"
            name="email"
            autoComplete="off"
            required
            value="pochta@yandex.ru"
            onChange={onChangeField}
          />
        </div>
      </form>
      <div className="profile__button-container">
        <button className="profile__button profile__button_type_edit">Редактировать</button>
        <button className="profile__button profile__button_type_signout">Выйти из аккаунта</button>
      </div>
    </section>
  );
}

export default Profile;
