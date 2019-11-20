import React from "react";
import { Link } from "react-scroll";

import logo from "../images/tac_logo_transparent.png";
import "./Header.css";

const Header = () => {
  const handleSetActive = to => {};
  return (
    <>
      <header className="header">
        <Link
          to="home"
          className="logo"
          activeclassName="active"
          spy={true}
          smooth={true}
          duration={400}
          onSetActive={to => handleSetActive(to)}
        >
          <img src={logo} className="logo" />
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link
              to="home"
              className="menu-item"
              activeclassName="active"
              spy={true}
              smooth={true}
              duration={400}
              onSetActive={to => handleSetActive(to)}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className="menu-item"
              activeclassName="active"
              spy={true}
              smooth={true}
              duration={400}
              onSetActive={to => handleSetActive(to)}
            >
              about
            </Link>
          </li>
          <li>
            <Link
              to="products"
              className="menu-item"
              activeclassName="active"
              spy={true}
              smooth={true}
              duration={400}
              onSetActive={to => handleSetActive(to)}
            >
              products
            </Link>
          </li>
          <li>
            <Link
              to="services"
              className="menu-item"
              activeclassName="active"
              spy={true}
              smooth={true}
              duration={400}
              onSetActive={to => handleSetActive(to)}
            >
              services
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="menu-item"
              activeclassName="active"
              spy={true}
              smooth={true}
              duration={400}
              onSetActive={to => handleSetActive(to)}
            >
              contact
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
