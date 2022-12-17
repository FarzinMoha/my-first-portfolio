import React from "react";
import FadeIn from "../../fade-in/FadeIn.component";
import "./Me.style.scss";

const Me = () => {
  return (
    <div className="about-me-container">
      <FadeIn>
        <div className="about-me">
          <p className="about-me-text">
            I am a creative, driven front-end web developer with a talent for
            quickly developing elegant solutions to problems.
          </p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="about-me">
          <p className="about-me-text">
          I have a drive and
            spirit for excellence.
          </p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="about-me">
          <p className="about-me-text">
          I am skilled in writing clean, testable code.
          </p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="about-me">
          <p className="about-me-text">Proficient in mobile-first responsive design and test-driven
            development.</p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="about-me">
          <p className="about-me-text">My primary focus is building my skills and knowledge in
            the web development industry.</p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="about-me">
          <p className="about-me-text">I would really appreciate an
            opportunity, and continue to learn more about the web development
            space.</p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="about-me">
          <p className="about-me-text">I have been very passionate about this ever since I was
            young,</p>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="about-me">
          <p className="about-me-text">
          I really enjoyed creating things and building things.
          </p>
        </div>
      </FadeIn>
    </div>
  );
};

export default Me;
