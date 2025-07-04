import React from "react";
import "./Intro.css";
import Confetti from "react-confetti";
import { useState } from "react";
import { useWindowSize } from "react-use";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleMouseEnter = () => {
    setShowConfetti(true);

    // Optional: stop after 2 seconds
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <div className="intro_container">
      <TypeAnimation
        className="intro_name"
        onClick={handleMouseEnter}
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Francisc Szasz - Frontend Engineer",
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
