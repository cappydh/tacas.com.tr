import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { IconContext } from "react-icons";
import { FaAngleDoubleUp } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="footer">
      <div className="iconarrow" onClick={scrollToTop}>
        <IconContext.Provider value={{ size: "3em", color: "white" }}>
          <FaAngleDoubleUp className="arrow-icon" />
        </IconContext.Provider>
      </div>
      <div className="bottomtext">
        ahmet uraloglu <span className="footerhighlight">©2019</span>
      </div>
    </div>
  );
};
export default Footer;
