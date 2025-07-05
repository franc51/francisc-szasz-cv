import { useState, React } from "react";
import "./Navigation.css";
import { Squeeze as Hamburger } from "hamburger-react";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav>
      <h3>@Francisc Szasz</h3>
      <ul className="full_menu">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="hamburger_wrapper">
        <Hamburger
          size={20}
          direction="right"
          duration={0.8}
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
    </nav>
  );
};

export default Navigation;
