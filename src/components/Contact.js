/* eslint-disable no-useless-concat */
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import "./Contact.css";

const Contact = () => {
  const [animateHeader, setAnimateHeader] = useState("");

  const onChangeHeader = isVisible => {
    if (isVisible) {
      setAnimateHeader("animated slideIn-left");
    }
  };

  return (
    <div id="contact" className="contact">
      <VisibilitySensor onChange={onChangeHeader}>
        <div className="container">
          <div className={"section-header" + " " + animateHeader}>contact</div>
          <div
            className={"section-header-bar" + " " + animateHeader}
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </VisibilitySensor>
      <div className="boilerPlate" style={{ height: "1200px" }}>
        for testing purposes
      </div>
    </div>
  );
};

export default Contact;
