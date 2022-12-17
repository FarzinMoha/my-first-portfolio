import React  from "react";
import "../css/About.scss"
import FadeIn from "../../fade-in/FadeIn.component";

const Education = () => {
  return (
    <div className="section-container">
      <div className="section">
        <FadeIn>
          <p className="section-title">Bachelor of PHYSICS</p>
        </FadeIn>
        <FadeIn>
          <p className="section-company">
            Azad University of Tehran, North Tehran Branch
          </p>
        </FadeIn>
        <FadeIn>
          <p className="section-date">Year of Graduation: 2014</p>
        </FadeIn>
      </div>
    </div>
  );
};

export default Education;
