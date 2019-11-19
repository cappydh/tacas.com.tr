/* eslint-disable no-useless-concat */
import React, { useState } from "react";
import { Link } from "react-scroll";
import { MdPhonelink } from "react-icons/md";
import { IoIosRocket, IoIosSpeedometer, IoMdFlower } from "react-icons/io";
import image from "../images/20833464.png";

import VisibilitySensor from "react-visibility-sensor";

import "./About.css";

const About = () => {
  const [animateHeader, setAnimateHeader] = useState("");
  const [animateCircles, setAnimateCircles] = useState("");
  const [animateText, setAnimateText] = useState("");
  const [animateAuthor, setAnimateAuthor] = useState("");
  const [animateSkills, setAnimateSkills] = useState("");
  const [animateBar, setAnimateBar] = useState("");

  const onChangeHeader = isVisible => {
    if (isVisible) {
      setAnimateHeader("animated slideIn-left");
    }
  };

  const onChangeQualityImage = isVisible => {
    if (isVisible) {
      setAnimateCircles("animated flip-in-x");
    }
  };

  const onChangeQualityText = isVisible => {
    if (isVisible) {
      setAnimateText("animated fadeIn");
    }
  };

  const onChangeAuthor = isVisible => {
    if (isVisible) {
      setAnimateAuthor("animated slideIn-left");
      setAnimateSkills("animated slideIn-right");
      setAnimateBar("animated bar");
    }
  };

  return (
    <div id="about" className="about">
      <VisibilitySensor onChange={onChangeHeader}>
        <div className="container">
          <div className={"section-header" + " " + animateHeader}>about</div>
          <div
            className={"section-header-bar" + " " + animateHeader}
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </VisibilitySensor>
      <div className="qualities">
        <div className="qualities-row">
          <div className="quality">
            <VisibilitySensor onChange={onChangeQualityImage}>
              <div className={"circle" + " " + animateCircles}>
                <MdPhonelink className="quality-image" />
              </div>
            </VisibilitySensor>
            <VisibilitySensor onChange={onChangeQualityText}>
              <div className={"quality-header" + " " + animateText}>
                <div className="quality-header-text">Responsive</div>
                <div className="quality-text">
                  My layouts will work on any device, big or small.
                </div>
              </div>
            </VisibilitySensor>
          </div>

          <div className="quality">
            <div
              className={"circle" + " " + animateCircles}
              style={{ animationDelay: "0.2s" }}
            >
              <IoIosRocket className="quality-image" />
            </div>
            <div
              className={"quality-header" + " " + animateText}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="quality-header-text">Dynamic</div>
              <div className="quality-text">
                I am good with dynamic design. And I like pushing myself to
                learn new stuff.
              </div>
            </div>
          </div>
        </div>
        <div className="qualities-row">
          <div className="quality">
            <div
              className={"circle" + " " + animateCircles}
              style={{ animationDelay: "0.4s" }}
            >
              <IoIosSpeedometer className="quality-image" />
            </div>

            <div
              className={"quality-header" + " " + animateText}
              style={{ animationDelay: "0.4s" }}
            >
              <div className="quality-header-text">Fast</div>
              <div className="quality-text">
                Nobody loves slow and laggy stuff. So I am doing fast loading
                websites.
              </div>
            </div>
          </div>
          <div className="quality">
            <div
              className={"circle" + " " + animateCircles}
              style={{ animationDelay: "0.6s" }}
            >
              <IoMdFlower className="quality-image" />
            </div>

            <div
              className={"quality-header" + " " + animateText}
              style={{ animationDelay: "0.6s" }}
            >
              <div className="quality-header-text">Aesthetic</div>
              <div className="quality-text">
                My work will not only be fast also it will be aesthetic and user
                friendly.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="author">
        <div className={"author-detail" + " " + animateAuthor}>
          <img className="author-image" src={image} alt="author" />
          <div className={"author-header"} style={{ animationDelay: "1s" }}>
            <div className="author-header-text">Who am I?</div>
            <div className="author-text">
              I'm a Front-End Developer for{" "}
              <a className="tac-link" href="https://www.tacas.com.tr/">
                TAC
              </a>{" "}
              in Istanbul, TURKEY. <br />I am very passionate about animations
              and aesthetic interfaces. <br />{" "}
              <Link
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={400}
                style={{ color: "#04c2c9", cursor: "pointer" }}
              >
                Contact me.
              </Link>
            </div>
          </div>
        </div>
        <div className={"skills" + " " + animateSkills}>
          <VisibilitySensor onChange={onChangeAuthor}>
            <div className="skill">
              <div
                className={"skill-bar" + " " + animateBar}
                style={{ width: "0%" }}
              >
                <div className="tag">CSS</div>
              </div>
              <span className="percentage">70%</span>
            </div>
          </VisibilitySensor>
          <div className="skill">
            <div
              className={"skill-bar" + " " + animateBar}
              style={{ width: "0%" }}
            >
              <div className="tag">HTML</div>
            </div>
            <span className="percentage">80%</span>
          </div>
          <div className="skill">
            <div
              className={"skill-bar" + " " + animateBar}
              style={{ width: "0%" }}
            >
              <div className="tag">React</div>
            </div>
            <span className="percentage">55%</span>
          </div>
          <div className="skill">
            <div
              className={"skill-bar" + " " + animateBar}
              style={{ width: "0%" }}
            >
              <div className="tag">JavaScript</div>
            </div>
            <span className="percentage">75%</span>
          </div>
          <div className="skill">
            <div
              className={"skill-bar" + " " + animateBar}
              style={{ width: "0%" }}
            >
              <div className="tag">jQuery</div>
            </div>
            <span className="percentage">60%</span>
          </div>
          <div className="skill">
            <div
              className={"skill-bar" + " " + animateBar}
              style={{ width: "0%" }}
            >
              <div className="tag">TypeScript</div>
            </div>
            <span className="percentage">30%</span>
          </div>
          <div className="skill">
            <div
              className={"skill-bar" + " " + animateBar}
              style={{ width: "0%" }}
            >
              <div className="tag">Git</div>
            </div>
            <span className="percentage">40%</span>
          </div>
          <div className="skill">
            <div
              className={"skill-bar" + " " + animateBar}
              style={{ width: "0%" }}
            >
              <div className="tag">UI Design</div>
            </div>
            <span className="percentage">50%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
