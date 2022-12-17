import React from "react";
import Fade from "react-reveal/Zoom";
import ProgressBar from "./progress-bar/ProgressBar.component";
import "./Skills.style.scss";

const Skills = () => {
  return (
    <>
      <ProgressBar title="Sass" done={100} />
      <ProgressBar title="javaScript" done={80} />
      <ProgressBar title="ReactJs" done={90} />
      <ProgressBar title="NextJs" done={70} />
      <ProgressBar title="Redux" done={80} />
      <ProgressBar title="ContextApi" done={100} />
      <ProgressBar title="GraphQL" done={100} />
      <ProgressBar title="GatsbyJs" done={100} />
      <ProgressBar title="AWS" done={70} />
      <ProgressBar title="Firebase" done={100} />
      <ProgressBar title="Github" done={70} />
      <ProgressBar title="Photoshop" done={50} />
      <Fade Fade bottom big cascade>
        <h2 className="each-title">LANGUAGES</h2>
      </Fade>
      <ProgressBar title="PERSIAN" done={100} />
      <ProgressBar title="ITALIAN" done={70} />
      <ProgressBar title="ENGLISH" done={60} />
      <ProgressBar title="GERMAN" done={40} />
    </>
  );
};

export default Skills;
