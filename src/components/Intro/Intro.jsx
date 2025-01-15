import React, { useEffect, useRef, useContext } from "react";
import "./Intro.css";

import boyyy from "../../img/boyyy.png";

import thumbup from "../../img/thumbup.png";

import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Typed from "typed.js";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [" Full-Stack Developer", " Java Developer "],
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div data-aos="zoom-out" data-aos-duration="1000">
      <div className="Intro" id="Intro">
        {/* left name side ====================================*/}
        <div className="i-left">
          <div className="i-name">
            {/* yahan change hy darkmode ka */}
            <span style={{ color: darkMode ? "white" : "" }}>Hello👋🏻 I'm</span>
            <span>Suman Kumar Nayak</span>
            <p>
              I am a <span ref={typedRef}></span>
            </p>
            {/* <span>Thank You for Your time 🙏🏻</span> */}
          </div>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button i-button">Hire me</button>
          </Link>
          {/* social icons */}
          <div className="i-icons">
            <a rel="stylesheet" href="https://github.com/Suman-x-01">
              <img src={Github} alt="" />
            </a>
            <a
              rel="stylesheet"
              href="https://www.linkedin.com/in/sumankumarnayak"
            >
              <img src={LinkedIn} alt="" />
            </a>
            <a
              rel="stylesheet"
              href="https://www.instagram.com/its._.me._.s._.u._.m._.a._.n._/?hl=en"
            >
              <img src={Instagram} alt="" />
            </a>
          </div>
        </div>
        {/* right image side =============================== */}
        <div className="i-right">
          <div className="main-container">
            <div class="image ">
              <img src={boyyy} alt="" />
            </div>
          </div>

          {/* animation */}
          <motion.div
            // initial={{ left: "9rem", top: "18rem" }}
            // whileInView={{ left: "0rem" }}
            transition={transition}
            className="floating-div demo-float"
          >
            {/* floatinDiv mein change hy dark mode ka */}
            <FloatinDiv img={thumbup} text1="Full-Stack" text2="Developer" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
