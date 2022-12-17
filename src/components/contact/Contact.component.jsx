import React from "react";
import "./Contact.style.scss";
import Fade from "react-reveal/Zoom";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";
import FadeIn from "../fade-in/FadeIn.component";

const Contact = () => {
  return (
    <div className="contact-container">
      <Fade bottom big cascade>
        <h1 className="title">CONTACT ME</h1>
      </Fade>
      <div className="Contact">
        <FadeIn>
          <p className="contact-text">TAP</p>
        </FadeIn>
        <FadeIn>
          <div className="contact-shape">
            <a
              href="https://github.com/FarzinMoha"
              target="_blanck"
              rel="noreferrer"
              className="contact-shape-row"
            >
              <span className="contact-shape-row-1">
                <span className="contact-shape-row-2">
                  <FiGithub className="social-icon" />
                </span>
                GITHUB
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/farzin-mohamadi/"
              target="_blanck"
              rel="noreferrer"
              className="contact-shape-row"
            >
              <span className="contact-shape-row-1">
                <span className="contact-shape-row-2">
                  <SlSocialLinkedin className="social-icon" />
                </span>
                LINKEDIN
              </span>
            </a>
            <a href="tel:+905528819132" className="contact-shape-row">
              <span className="contact-shape-row-1">
                <span className="contact-shape-row-2">
                  <AiOutlineWhatsApp className="social-icon" />
                </span>
                WHATSAPP
              </span>
            </a>
            <a
              href="mailto:farzinm4874@gmail.com"
              target="_blanck"
              rel="noreferrer"
              className="contact-shape-row"
            >
              <span className="contact-shape-row-1">
                <span className="contact-shape-row-2">
                  <MdAlternateEmail className="social-icon" />
                </span>
                EMAIL
              </span>
            </a>
            <a
              href="https://t.me/farzin_mo"
              target="_blanck"
              className="contact-shape-row"
            >
              <span className="contact-shape-row-1">
                <span className="contact-shape-row-2">
                  <TbBrandTelegram className="social-icon" />
                </span>
                TELEGRAM
              </span>
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Contact;
