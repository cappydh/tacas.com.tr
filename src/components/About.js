import React from "react";
import { IconContext } from "react-icons";
import { MdPhonelink } from "react-icons/md";
import { IoIosRocket, IoIosSpeedometer } from "react-icons/io";

import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="section-header">about</div>
        <div className="section-header-bar" />
      </div>
      <div className="qualities">
        <div className="quality">
          <div className="circle">
            <MdPhonelink className="quality-image" />
          </div>
          <div className="quality-header">
            Aesthetic
            <div className="quality-text">
              My work will not only be fast also it will be aesthetic and user
              friendly.
            </div>
          </div>
        </div>
        <div className="quality">
          <div className="circle">
            <IoIosRocket className="quality-image" />
          </div>
          <div className="quality-header">
            Dynamic
            <div className="quality-text">
              I am good with dynamic design. And I like pushing myself to learn
              new stuff.
            </div>
          </div>
        </div>
        <div className="quality">
          <div className="circle">
            <IoIosSpeedometer className="quality-image" />
          </div>
          <div className="quality-header">
            Fast
            <div className="quality-text">
              Nobody loves slow and laggy stuff. So I am doing fast loading
              websites.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
