import React from "react";
import "./Footer.css";

import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <div className="f-title">
          Connnect<span className="f-highlighted-text"> withMe </span>
        </div>

        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a
            href="https://www.instagram.com/its._.me._.s._.u._.m._.a._.n._/?hl=en"
            target="_blank"
            className="items"
            rel="noreferrer"
          >
            <FaInstagram className="icons" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100034915983531"
            target="_blank"
            className="items"
            rel="noreferrer"
          >
            <CiFacebook className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/sumankumarnayak"
            target="_blank"
            className="items"
            rel="noreferrer"
          >
            <CiLinkedin className="icons" />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            className="items"
            rel="noreferrer"
          >
            <FaSquareXTwitter className="icons" />
          </a>
          <a
            href="https://github.com/Suman-x-01"
            target="_blank"
            className="items"
            rel="noreferrer"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:nayaksuman251@gmail.com"
            target="_blank"
            className="items"
            rel="noreferrer"
            fill="yellow"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
      <div className="end-line">
        <p>Made by @Suman ❤️</p>
      </div>
    </>
  );
};

export default Footer;
