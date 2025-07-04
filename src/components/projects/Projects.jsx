import React, { useState } from "react";
import "./Projects.css";
import { Tooltip } from "react-tooltip";
import { projectData } from "./projectData";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  // Filter projects based on category
  const filteredProjects =
    filter === "All"
      ? projectData
      : projectData.filter((proj) => proj.category === filter);

  return (
    <div className="projects_container" id="portfolio">
      <Tooltip id="ngprojects" />
      <div className="projects_tile">
        <div>
          <h1>Projects</h1>
        </div>
        <div className="projects_filter_btns">
          {["Angular", "React", "Other", "All"].map((cat) => (
            <button
              key={cat}
              data-tooltip-id="ngprojects"
              data-tooltip-content={`Show only ${cat} projects`}
              className={filter === cat ? "active" : ""}
              onClick={() => setFilter(cat)}
            >
              {cat === "Other" ? "Other" : cat + " Projects"}
            </button>
          ))}
        </div>
      </div>

      <hr />

      <AnimatePresence>
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            layout
          >
            <div className="projects_title_and_info">
              <div className="projects_left">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="link_btns">
                  <button
                    className="github_btn"
                    data-tooltip-id="ngprojects"
                    data-tooltip-content="Go to repository"
                  >
                    <a href={project.github}>Github</a>
                  </button>
                  <button
                    className="website_btn"
                    data-tooltip-id="ngprojects"
                    data-tooltip-content="Go to website"
                  >
                    <a href={project.website}>Live website</a>
                  </button>
                </div>
                <p>Technologies used: {project.tech}</p>
              </div>
              <div className="projects_demo">
                <img src={project.video} alt="preview"></img>
              </div>
            </div>
            <hr />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
