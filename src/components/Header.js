import React from "react";
import { Link } from "react-scroll";

import "./Header.css";

const Header = () => {
  const handleSetActive = to => {};
  return (
    <div className="header">
      <div className="menu">
        <Link
          to="home"
          className="menu-item"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={400}
          onSetActive={to => handleSetActive(to)}
        >
          home
        </Link>
        <Link
          to="about"
          className="menu-item"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={400}
          onSetActive={to => handleSetActive(to)}
        >
          about
        </Link>
        <Link
          to="contact"
          className="menu-item"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={400}
          onSetActive={to => handleSetActive(to)}
        >
          contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
