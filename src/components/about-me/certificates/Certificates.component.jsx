import React from "react";
import FadeIn from "../../fade-in/FadeIn.component";
import "../css/About.scss";

const Certificates = () => {
  return (
    <div className="section-container">
      <div className="section">
        <FadeIn>
          <p className="section-title">
            ⚪️ Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)
          </p>
        </FadeIn>
        <FadeIn>
          <p className="section-company">Udemy</p>
        </FadeIn>
        <FadeIn>
          <p className="section-date">
            Instructors: Andrei Neagoie, Yihua Zhang, Zero To Mastery
          </p>
        </FadeIn>
        <FadeIn>
          <a
            href="https://www.udemy.com/certificate/UC-411b7c39-b7c2-4a64-92b9-eb8e8066e980/"
            target="_blank"
            rel="noreferrer"
            className="section-text"
          >
            CLICK TO CHECK
          </a>
        </FadeIn>
      </div>
      <div className="section">
        <FadeIn>
          <p className="section-title">⚪️ Responsive Web Design</p>
        </FadeIn>
        <FadeIn>
          <p className="section-company">freeCodeCamp</p>
        </FadeIn>
        <FadeIn>
          <a
            href="https://www.freecodecamp.org/certification/farzinm4874/responsive-web-design"
            target="_blank"
            rel="noreferrer"
            className="section-text"
          >
            CLICK TO CHECK
          </a>
        </FadeIn>
      </div>
    </div>
  );
};

export default Certificates;
