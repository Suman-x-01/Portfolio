import Marquee from "react-fast-marquee";
import "./Skills.css"; // Make sure to import the CSS file.

import { skills } from "../../Data/Data";

const Skills = () => {
  return (
    <>
      <div className="title">
        My<span className="highlighted-text">Skills </span>
      </div>
      <div
        className="companies-container"
        id="skills"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <Marquee pauseOnHover={true}>
          {skills.map((skills, index) => (
            <div key={index} className="company-item">
              <img
                className="company-logo"
                src={`./skills/${skills}.png`}
                alt={skills}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default Skills;
