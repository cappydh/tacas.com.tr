/* eslint-disable no-useless-concat */
import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

import logo from "../images/tacas_new.png";
import "./Header.css";

class Header extends React.Component {
  state = { isScrolled: false, headerClass: "" };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    if (window.pageYOffset !== 0) {
      this.setState({ isScrolled: true });
      this.setState({ headerClass: "scrolled" });
    } else {
      this.setState({ isScrolled: false });
      this.setState({ headerClass: "" });
    }
  };

  handleSetActive = to => {};
  render() {
    return (
      <>
        <header className={"header" + " " + this.state.headerClass}>
          <NavLink
            to="#home"
            className="logo"
            activeclassname="active"
            smooth={true}
          >
            <img src={logo} className="logo" alt="logo" />
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink
                to="#home"
                className="menu-item"
                activeclassname="active"
                smooth={true}
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#about"
                className="menu-item"
                activeclassname="active"
                smooth={true}
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#products"
                className="menu-item"
                activeclassname="active"
                smooth={true}
              >
                products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#services"
                className="menu-item"
                activeclassname="active"
                smooth={true}
              >
                services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#contact"
                className="menu-item"
                activeclassname="active"
                smooth={true}
              >
                contact
              </NavLink>
            </li>
          </ul>
        </header>
      </>
    );
  }
}

export default Header;
