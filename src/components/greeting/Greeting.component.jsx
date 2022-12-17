import React, { useState } from "react";
// ===========style.scss==============
import "./Greeting.style.scss";
import Fade from "react-reveal";
import CV from "../../cv/Farzin Mohamadi CV.pdf";

const Greeting = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="greet-container">
      <div className="color1"></div>
      <div className="color2"></div>
      <div className="navigation">
        <div className="navigation-items">
          <h1>Farzin</h1>
          <p
            onClick={() => setShow(!show)}
            className="navigation-menu-icon"
            style={
              show
                ? { transform: "Rotate(720deg)" }
                : { transform: "Rotate(0deg)" }
            }
          >
            CV
          </p>
        </div>
        <Fade bottom big cascade>
          <div
            className="menu-items-container"
            style={show ? { display: "block" } : { display: "none" }}
          >
            <div className="menu-items">
              <a href={CV} onClick={()=>setShow(false)} className="menu-item" download="Farzin-Mohamadi.pdf">
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Greeting;
