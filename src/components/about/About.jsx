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
          Detail-oriented Frontend Developer with a solid academic background
          and over two years of hands-on experience in building scalable,
          maintainable, and responsive web applications. Specialized in React
          and Angular, with additional backend knowledge in Node.js, Flask, and
          MongoDB
        </p>
        <p>
          Mentored by a Senior IBM Engineer, I approach development with clean
          code practices, performance optimization strategies, and a passion for
          intuitive user experiences. Eager to contribute to collaborative teams
          and deliver enterprise-grade frontend solutions in agile environments
        </p>
      </div>
    </div>
  );
};

export default About;
