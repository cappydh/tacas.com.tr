import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { FaArrowRight } from "react-icons/fa";

import "./Information.css";

const Information = () => {
  return (
    <div id="home" className="app">
      <div className="center">
        <div>
          <div className="text">
            Our goal is; <br /> <span>providing</span>{" "}
            <span className="highlight">holistic consulting</span>,
            <br />
            <span className="highlight">technology</span>,
            <br />
            <span className="highlight">education services</span>.
          </div>
          <NavLink to="#about" smooth={true}>
            <div className="button page-link">
              <span className="button-text">discover now</span>
              <FaArrowRight className="arrowicon" />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Information;
