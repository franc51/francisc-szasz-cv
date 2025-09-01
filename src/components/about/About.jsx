import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about_container" id="about">
      <div className="about_title">
        <h2>About</h2>
      </div>
      <div className="about_description">
        <h3>"Simplicity is the soul of efficiency." - Austin Freeman</h3>
        <hr></hr>
        <p>
          Full-stack ready Frontend Developer specialized in React & Angular,
          with Node.js and Flask backend experience. Proven ability to deliver
          scalable, responsive web apps.
        </p>
        <p>
          Mentored by a Senior IBM Engineer, I approach development with clean
          code practices, performance optimization strategies, and a passion for
          intuitive user experiences. Eager to contribute to collaborative teams
          and deliver enterprise-grade frontend solutions in agile environments
        </p>

        <a className="btn-testimonials" href="#testimonials">
          See what others say about me
        </a>
      </div>
    </div>
  );
};

export default About;
