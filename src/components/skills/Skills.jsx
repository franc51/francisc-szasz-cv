import { useState, useRef, React } from "react";
import "./Skills.css";
import { Tooltip } from "react-tooltip";

const Skills = () => {
  const [popPosition, setPopPosition] = useState({ x: 0, y: 0 });
  const [showPop, setShowPop] = useState(false);
  const audioRef = useRef(null);

  const pop = (e) => {
    audioRef.current?.play();
    // Get position of clicked <p>
    const rect = e.target.getBoundingClientRect();
    setPopPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
    // Show animation
    setShowPop(true);
    // Hide animation after 400ms
    setTimeout(() => setShowPop(false), 400);
  };

  return (
    <div className="skills_container" id="skills">
      <div className="skills_title">
        <h2>Skills</h2>
      </div>
      <div className="skills_description">
        {/* Animated GIF positioned absolutely */}
        {showPop && (
          <img
            src="/assets/pop.gif"
            alt="pop"
            className="pop_gif"
            style={{
              position: "fixed",
              top: popPosition.y - 25,
              left: popPosition.x - 25,
              width: 100,
              height: 100,
              pointerEvents: "none",
              zIndex: 9999,
            }}
          />
        )}

        <div className="skills_animation">
          <audio ref={audioRef} src="/assets/bubble-pop.mp3" preload="auto" />
          <h3 className="skill_part">Frontend</h3>
          <hr />
          <Tooltip id="ngid" />
          <Tooltip id="cssid" />
          <div className="wrapper">
            <p onClick={pop} id="green">
              HTML5
            </p>
            <p
              data-tooltip-id="cssid"
              data-tooltip-content="He loves me."
              onClick={pop}
              id="green"
            >
              CSS3
            </p>
            <p onClick={pop} id="green">
              SASS
            </p>
            <p onClick={pop} id="green">
              JavaScript
            </p>
            <p onClick={pop} id="green">
              TypeScript
            </p>
            <p
              data-tooltip-id="ngid"
              data-tooltip-content="He likes me the most."
              onClick={pop}
              id="green"
            >
              Angular
            </p>
            <p onClick={pop} id="green">
              React
            </p>
            <p onClick={pop} id="green">
              Bootstrap 5
            </p>
            <p onClick={pop} id="green">
              MUI
            </p>
            <p onClick={pop} id="green">
              Angular Material
            </p>
            <p onClick={pop} id="green">
              GSAP
            </p>
          </div>
        </div>
        <div className="skills_animation">
          <h3 className="skill_part">Backend</h3>
          <hr />
          <div className="wrapper">
            <p onClick={pop} id="red">
              Node.js
            </p>
            <p onClick={pop} id="red">
              Express.js
            </p>
            <p onClick={pop} id="red">
              SQL
            </p>
            <p onClick={pop} id="red">
              MySQL
            </p>
            <p onClick={pop} id="red">
              MongoDB
            </p>
            <p onClick={pop} id="red">
              Python
            </p>
            <p onClick={pop} id="red">
              Flask
            </p>
          </div>
        </div>
        <div className="skills_animation">
          <h3 className="skill_part">DevOps & Misc.</h3>
          <hr />
          <div className="wrapper">
            <p onClick={pop} id="yellow">
              Docker
            </p>
            <p onClick={pop} id="yellow">
              Git
            </p>
            <p onClick={pop} id="yellow">
              Google Cloud
            </p>
            <p onClick={pop} id="yellow">
              Figma
            </p>
            <p onClick={pop} id="yellow">
              Firebase
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
