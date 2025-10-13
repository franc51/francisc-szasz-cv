import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer_container" id="contact">
      <div>
        <h1>Have something in mind?</h1>
        <TypeAnimation
          className="footer_name"
          sequence={[
            "Let's build it together.",
            2000,
            "Let's create it together.",
            2000,
          ]}
          speed={30}
          repeat={Infinity}
        />
      </div>

      <button onClick={() => navigate("/contact")}>Get in touch</button>
    </div>
  );
};

export default Footer;
