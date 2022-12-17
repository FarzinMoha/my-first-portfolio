import React from "react";
import FadeIn from "../../fade-in/FadeIn.component";
import "../css/About.scss";

const Experience = () => {
  return (
    <div className="section-container">
      <FadeIn>
        <div className="section">
          <p className="section-title">
            1-PHYSICS TEACHER AND ACADEMIC COUNSELLOR
          </p>
          <p className="section-company">SALAM SCHOOLS COMPLEX</p>
          <p className="section-date">Sep 2009 - Sep 2018</p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="section">
          <p className="section-title">2-FRONT END DEVELOPER</p>
          <p className="section-company">WEB PORTAL COMPANY</p>
          <p className="section-date">Sep 2016 - Sep 2018</p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="section">
          <p className="section-title">3-FRONT END DEVELOPER</p>
          <p className="section-company">WEB NOVIN COMPANY</p>
          <p className="section-date">Oct 2018 - Dec 2020</p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="section">
          <p className="section-title">4- FRONT END DEVELOPER</p>
          <p className="section-company">FREELANCER</p>
          <p className="section-date">Dec 2020 - Present</p>
        </div>
      </FadeIn>
    </div>
  );
};

export default Experience;
