import React from "react";
import { Link } from "react-scroll";
import { FaArrowRight } from "react-icons/fa";

import background from "../images/bg4.jpg";
import "./Information.css";

const Information = () => {
  return (
    <div id="home" className="app">
      <div className="center">
        <div>
          <div className="text">
            {/* //Our goal is providing holistic consulting, technology and education services */}
            Our goal is; <br /> <span>providing</span>{" "}
            <span className="highlight">holistic consulting</span>,
            <br />
            <span className="highlight">technology</span>,
            <br />
            <span className="highlight">education services</span>.
          </div>
          <Link to="about" spy={true} smooth={true} duration={500}>
            <div className="button page-link">
              <span className="button-text">discover now</span>
              <FaArrowRight className="arrowicon" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Information;
