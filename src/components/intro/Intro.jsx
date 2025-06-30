import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="intro_container">
      <h1 className="intro_name">Francisc Szasz - Frontend Engineer</h1>
      <a href="/assets/Szasz-Francisc-CV-EN.pdf" download>
        <button className="intro_button">
          <p>Download Resume</p>
        </button>
      </a>
    </div>
  );
};

export default Intro;
