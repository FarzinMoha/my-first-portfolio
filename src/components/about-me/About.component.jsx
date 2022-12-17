import React, { useState } from "react";
import "./About.style.scss";
import Fade from "react-reveal/Zoom";
import Skills from "./ability/Skills.component";
import Experience from "./experience/Experience.component";
import Education from "./education/Education.component";
import Me from "./me/Me.component";
import Certificates from "./certificates/Certificates.component";
import Magnifire from "../magnifire/Magnifire";

const About = () => {
  const [magnifire, setMagnifire] = useState(false);
  return (
    <div className="about-container">
      <Fade bottom big cascade>
        <h1 className="title" style={{paddingBottom:'100px'}}>ABOUT ME</h1>
      </Fade>
      <Fade bottom big cascade>
        <h1 className="each-title">WHO AM I ?</h1>
      </Fade>
      <Me />
      <Fade bottom big cascade>
        <h1 className="each-title">SKILLS</h1>
      </Fade>
      <Skills />
      <div className="magnifire-available"
              onMouseEnter={() => setMagnifire(true)}
              onMouseLeave={() => setMagnifire(false)}
      >
        {magnifire ? <Magnifire /> : null}
        <Fade bottom big cascade>
          <h1 className="each-title">EXPERIENCE</h1>
        </Fade>
        <Experience />
        <Fade bottom big cascade>
          <h1 className="each-title">EDUCATION</h1>
        </Fade>
        <Education />
        <Fade bottom big cascade>
          <h1 className="each-title">CERTIFICATES</h1>
        </Fade>
        <Certificates />
      </div>
    </div>
  );
};

export default About;