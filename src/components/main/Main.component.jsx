import React from "react";
import About from "../about-me/About.component";
import Intro from "../first-section/Intro.component";
import Greeting from "../greeting/Greeting.component";
import Contact from "../contact/Contact.component";
import Footer from "../footer/Footer.component";

const Main = () => {
  return (
    <div>
      <Greeting />
      <Intro/>
      <About/>
      <Contact />
      <Footer/>
    </div>
  );
};

export default Main;
