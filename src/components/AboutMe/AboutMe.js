import SectionCaption from "../SectionCaption/SectionCaption";
import studentPhoto from "../../images/student.png";
import "./AboutMe.css";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <SectionCaption text="Студент" />
      <div className="about-me__container">
        <div className="about-me__text-container">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__shot-description">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать
            музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После
            того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="about-me__social">
            <li className="about-me__social-item">
              <a className="about-me__link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li className="about-me__social-item">
              <a className="about-me__link" href="https://github.com/" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" alt="Фото студента" src={studentPhoto}></img>
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
