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
          Detail-oriented Full-stack developer with a solid academic background
          in computer science and over two years of experience in building
          responsive, user-focused web applications. Experience in React and
          Angular, with additional backend exposure in Node.js, Flask, and
          MongoDB.
        </p>
        <p>
          Mentored by a Senior IBM Engineer, I follow clean code practices,
          performance optimization strategies, and craft intuitive user
          experiences. Eager to contribute to collaborative teams and deliver
          high-quality software solutions.
        </p>

        <a className="btn-testimonials" href="#testimonials">
          See what others say about me ▶
        </a>
      </div>
    </div>
  );
};

export default About;
