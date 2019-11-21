import React from "react";
import { Link } from "react-scroll";

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
          <Link
            to="home"
            className="logo"
            activeclassName="active"
            spy={true}
            smooth={true}
            duration={400}
            onSetActive={to => this.handleSetActive(to)}
          >
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
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
                onSetActive={to => this.handleSetActive(to)}
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
                onSetActive={to => this.handleSetActive(to)}
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
                onSetActive={to => this.handleSetActive(to)}
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
                onSetActive={to => this.handleSetActive(to)}
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
                onSetActive={to => this.handleSetActive(to)}
              >
                contact
              </Link>
            </li>
          </ul>
        </header>
      </>
    );
  }
}

export default Header;
