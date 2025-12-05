import React from "react";

import "./About.css";
import boy2 from "../../img/boy2.png";
import SumanKumarNayak from "../resume/SumanKumarNayak.pdf";

const About = () => {
  return (
    <div className="about">
      <div className="a-title">
        About<span className="highlighted-text">Me </span>
      </div>
      <div className="about-me">
        <div
          className="left-section"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <img src={boy2} alt="Profile" className="profile-image" />
        </div>
        <div
          className="right-section"
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <p>
            Hello! I'm Suman Kumar nayak, Aspiring Full Stack Developer , eager
            to learn and grow.
          </p>
          <p>
            I enjoy solving problems and creating meaningful digital
            experiences.
          </p>
          <ul className="details">
            <li>
              <strong>Age:</strong> 23
            </li>
            <li>
              <strong>Phone:</strong> 9732335816
            </li>
            <li>
              <strong>Email:</strong> nayaksuman251@gmail.com
            </li>
            <li>
              <strong>Experience:</strong> Fresher
            </li>
          </ul>
          <a href={SumanKumarNayak} download>
            <button className="button s-button">Download CV </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
