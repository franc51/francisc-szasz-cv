import React from "react";
import "./Skills.css";
import { Tooltip } from "react-tooltip";

const Skills = () => {
  return (
    <div className="skills_container" id="skills">
      <div className="skills_title">
        <h2>Skills</h2>
      </div>
      <div className="skills_description">
        <div className="skills_animation">
          <h3 className="skill_part">Frontend</h3>
          <hr></hr>
          <Tooltip id="ngid" />
          <Tooltip id="cssid" />
          <p>HTML5</p>
          <p data-tooltip-id="cssid" data-tooltip-content="He loves me.">
            CSS3
          </p>
          <p>SASS</p>
          <p>JavaScript</p>
          <p>TypeScript</p>
          <p
            data-tooltip-id="ngid"
            data-tooltip-content="He likes me the most."
          >
            Angular
          </p>
          <p>React</p>
          <p>Bootstrap 5</p>
          <p>MUI</p>
          <p>Angular Material</p>
          <p>GSAP</p>
        </div>
        <div className="skills_animation">
          <h3 className="skill_part">Backend</h3>
          <hr></hr>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>SQL</p>
          <p>MySQL</p>
          <p>MongoDB</p>
          <p>Python</p>
          <p>Flask</p>
        </div>
        <div className="skills_animation">
          <h3 className="skill_part">DevOps & Misc.</h3>
          <hr></hr>
          <p>Docker</p>
          <p>Git</p>
          <p>Google Cloud</p>
          <p>Figma</p>
          <p>Firebase</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
