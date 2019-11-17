import React from "react";
import { Link } from "react-scroll";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

import "./Information.css";

const Information = () => {
  return (
    <div id="home" className="app">
      <div className="center">
        <div>
          <div className="text">
            Hello, I'm <span className="highlight">Ahmet Uraloglu</span>.
            <br />
            <span>I'm a front-end web developer.</span>
          </div>
          <div className="icons">
            <a
              href="https://github.com/cappydh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconContext.Provider value={{ size: "3em" }}>
                <FaGithub className="github huge icon icons" />
              </IconContext.Provider>
            </a>
            <a
              href="https://www.linkedin.com/in/ahmeturaloglu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconContext.Provider value={{ size: "3em" }}>
                <FaLinkedin className="linkedin huge icon icons" />
              </IconContext.Provider>
            </a>
          </div>
          <Link to="about" spy={true} smooth={true} duration={500}>
            <div className="button page-link">
              <span>View my work </span>
              <FaArrowRight className="arrowicon" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Information;
