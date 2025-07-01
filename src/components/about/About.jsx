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
          I'm a frontend engineer with a strong passion for building clean,
          intuitive, and user-friendly interfaces. I got into programming during
          university, and over time, I naturally gravitated toward frontend
          development. It’s the perfect blend of creativity and logic, and it’s
          where I feel most at home.
        </p>
        <p>
          I take pride in having an idealistic mindset and always aim for the
          highest level of quality in the work I do. I enjoy sharing what I
          know, learning from others, and working as part of a team to build
          thoughtful, well-crafted products that people genuinely enjoy using.
        </p>
      </div>
    </div>
  );
};

export default About;
