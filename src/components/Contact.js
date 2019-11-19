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
    <div id="contact" className="contact">
      <VisibilitySensor onChange={onChangeHeader}>
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
      </VisibilitySensor>
      <MailForm />
    </div>
  );
};

export default Contact;
