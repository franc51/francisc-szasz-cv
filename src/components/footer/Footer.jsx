import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer_container" id="contact">
      <h1>
        Have something in mind? <br></br> let's build it together.
      </h1>
      <button onClick={() => navigate("/contact")}>Get in touch</button>
    </div>
  );
};

export default Footer;
