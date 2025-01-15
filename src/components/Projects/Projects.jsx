import React from "react";
import project from "../../Data/projects.json";
import "./Projects.css"; // Import the new CSS file

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <div className="p-title">
        Personal<span className="highlighted-text">Projects </span>
      </div>
      <div className="projects-row">
        {project.map((data) => (
          <div key={data.id} className="project-card-container">
            <div
              className="project-card"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="project-image-container">
                <img src={data.imageSrc} className="project-image" alt="..." />
              </div>
              <div className="project-card-body">
                <h5 className="project-title">{data.title}</h5>
                <p className="project-description">{data.description}</p>
                <a href={data.demo} className="project-button demo-button">
                  Demo
                </a>
                <a href={data.source} className="project-button code-button">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
