/* eslint-disable no-useless-concat */
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import MailForm from "./MailForm";

import "./Contact.css";

const Contact = () => {
  const [animateHeader, setAnimateHeader] = useState("");

  const onChangeHeader = isVisible => {
    if (isVisible) {
      setAnimateHeader("animated slideIn-left");
    }
  };

  return (
    <React.Fragment>
      <VisibilitySensor onChange={onChangeHeader}>
        <svg
          id="bigTriangleColor"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100"
          viewBox="0 0 100 102"
          preserveAspectRatio="none"
        >
          <path d="M0 0 L50 100 L100 0 Z" />
        </svg>
      </VisibilitySensor>
      <div id="contact" className="contact">
        <div className="container">
          <div
            className={"section-header" + " " + animateHeader}
            style={{ color: "white" }}
          >
            contact
          </div>
          <div
            className={"section-header-bar" + " " + animateHeader}
            style={{ animationDelay: "0.4s", backgroundColor: "white" }}
          />
        </div>
        <MailForm />
      </div>
    </React.Fragment>
  );
};

export default Contact;
