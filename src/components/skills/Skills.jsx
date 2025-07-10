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
          <p onClick={pop}>HTML5</p>
          <p
            data-tooltip-id="cssid"
            data-tooltip-content="He loves me."
            onClick={pop}
          >
            CSS3
          </p>
          <p onClick={pop}>SASS</p>
          <p onClick={pop}>JavaScript</p>
          <p onClick={pop}>TypeScript</p>
          <p
            data-tooltip-id="ngid"
            data-tooltip-content="He likes me the most."
            onClick={pop}
          >
            Angular
          </p>
          <p onClick={pop}>React</p>
          <p onClick={pop}>Bootstrap 5</p>
          <p onClick={pop}>MUI</p>
          <p onClick={pop}>Angular Material</p>
          <p onClick={pop}>GSAP</p>
        </div>
        <div className="skills_animation">
          <h3 className="skill_part">Backend</h3>
          <hr />
          <p onClick={pop}>Node.js</p>
          <p onClick={pop}>Express.js</p>
          <p onClick={pop}>SQL</p>
          <p onClick={pop}>MySQL</p>
          <p onClick={pop}>MongoDB</p>
          <p onClick={pop}>Python</p>
          <p onClick={pop}>Flask</p>
        </div>
        <div className="skills_animation">
          <h3 className="skill_part">DevOps & Misc.</h3>
          <hr />
          <p onClick={pop}>Docker</p>
          <p onClick={pop}>Git</p>
          <p onClick={pop}>Google Cloud</p>
          <p onClick={pop}>Figma</p>
          <p onClick={pop}>Firebase</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
