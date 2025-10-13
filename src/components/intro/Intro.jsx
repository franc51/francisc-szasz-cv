import React from "react";
import "./Intro.css";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";

const Intro = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("stars-js", {
        particles: {
          number: { value: 10 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            random: true,
            anim: { enable: true, speed: 2, opacity_min: 0.8, sync: false },
          },
          size: {
            value: 8,
            random: true,
          },
          move: {
            enable: true,
            speed: 5,
          },
        },
        background: {
          color: "#000000",
        },
      });
    }
  }, []);

  return (
    <div className="intro_container" id="stars-js">
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
      <a href="/assets/FranciscSzasz-CV-13oct.pdf" download>
        <button className="intro_button">
          <p>Download Resume</p>
        </button>
      </a>
      <img
        className="circle_image"
        src="/assets/profile.png"
        alt="profile"
      ></img>
    </div>
  );
};

export default Intro;
