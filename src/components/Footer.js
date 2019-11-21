import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { IconContext } from "react-icons";
import { FaAngleDoubleUp } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <NavLink to="#home" smooth={true}>
        <div className="iconarrow">
          <IconContext.Provider value={{ size: "3em", color: "white" }}>
            <FaAngleDoubleUp className="arrow-icon" />
          </IconContext.Provider>
        </div>
      </NavLink>

      <div className="bottomtext">
        ahmet uraloglu <span className="footerhighlight">©2019</span>
      </div>
    </div>
  );
};
export default Footer;
