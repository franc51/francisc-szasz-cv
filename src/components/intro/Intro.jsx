import React from "react";
import "./Intro.css";
import Confetti from "react-confetti";
import { useState } from "react";
import { useWindowSize } from "react-use";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  return (
    <div className="intro_container">
      <TypeAnimation
        className="intro_name"
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Francisc Szasz",
          1000,
          "Francisc Szasz - Frontend Engineer",
          10000,
          "Francisc Szasz - Software Developer",
          10000,
        ]}
        speed={10}
        repeat={Infinity}
      />
      <a href="/assets/Szasz-Francisc-CV-EN.pdf" download>
        <button className="intro_button">
          <p>Download Resume</p>
          {showConfetti && <Confetti width={width} height={height} />}
        </button>
      </a>
    </div>
  );
};

export default Intro;
