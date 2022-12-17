import { useState } from "react";
import FadeIn from "../../../fade-in/FadeIn.component";
import "./ProgressBar.style.scss";

const ProgressBar = ({ done , title }) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <FadeIn>
        <div className="progress-container">
            <p className="progress-title">{title}</p>

      <div className="progress">
        <div className="progress-done" style={style}>
          {done}%
        </div>
      </div>
        </div>
    </FadeIn>
  );
};

export default ProgressBar;
