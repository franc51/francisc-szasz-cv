import React from "react";
import "./Intro.css";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";

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
      <h1 className="intro_name" onClick={handleMouseEnter}>
        Francisc Szasz - Frontend Engineer
      </h1>
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
