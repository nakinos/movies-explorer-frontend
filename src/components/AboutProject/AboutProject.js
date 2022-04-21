import SectionCaption from "../SectionCaption/SectionCaption";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about">
      <SectionCaption text="О проекте" />
      <section className="about-project__two-columns">
        <article className="about-project__text-container">
          <h3 className="about-project__text-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </article>
        <article className="about-project__text-container">
          <h3 className="about-project__text-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </section>
      <div className="about-project__schedule">
        <div className="about-project__week">
          <div className="about-project__one-week">
            <span className="about-project__caption about-project__caption_type_week-one">1 неделя</span>
          </div>
          <span className="about-project__caption about-project__caption_type_undercaption">Back-end</span>
        </div>
        <div className="about-project__week">
          <div className="about-project__four-week">
            <span className="about-project__caption about-project__caption_type_week-four">4 недели</span>
          </div>
          <span className="about-project__caption about-project__caption_type_undercaption">Front-end</span>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
