import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects_container" id="portfolio">
      <div className="projects_tile">
        <div>
          <h1>Projects</h1>
        </div>
        <div className="projects_filter_btns">
          <button>
            <a>Angular Projects</a>
          </button>
          <button>
            <a>React Projects</a>
          </button>
          <button>
            <a>All Projects</a>
          </button>
        </div>
      </div>
      <hr></hr>
      <div className="projects_title_and_info">
        <div className="projects_left">
          <h2>Carly</h2>
          <p>
            Carly is a prototype for an online platform where romanians can
            register their car from the confort of their home. It has the real
            potential to save time money and effort for millions of people if
            it's integrated with government legislation.
          </p>
          <div className="link_btns">
            <button className="github_btn">
              <a href="https://github.com/franc51/carly5">Github</a>
            </button>
            <button className="website_btn">
              <a href="https://carly-58c95.web.app/">Live website</a>
            </button>
          </div>
          <p>
            Technologies used: Angular, Angular Material, Firebase, Auth0,
            Stripe, EmailJS, Uploadcare
          </p>
        </div>
        <div className="projects_demo">
          <iframe
            width="1250"
            height="703"
            src="https://www.youtube.com/embed/t3zlu6Y9goE"
            title="Wave (feat. Mansasworld) | #nightride"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Projects;
