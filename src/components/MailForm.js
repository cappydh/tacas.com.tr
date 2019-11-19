/* eslint-disable no-useless-concat */
import React from "react";

import VisibilitySensor from "react-visibility-sensor";

import "./MailForm.css";

export default class extends React.Component {
  state = { mailBody: "", name: "", email: "", animateHeader: "" };

  handleChangeBody(event) {
    this.setState({ mailBody: event.target.value });
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeMail(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    const templateId = "template_fguavxeR";

    this.sendFeedback(templateId, {
      message_html: this.state.mailBody,
      from_name: this.state.name,
      reply_to: this.state.email
    });
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        console.log("Email successfully sent!");
        this.setState({ mailBody: "", name: "", email: "" });
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  onChangeMailHeader = isVisible => {
    console.log(isVisible);
    if (isVisible) {
      this.setState({ animateHeader: "animated pop-in" });
    }
  };
  render() {
    return (
      <form className={"mail-form" + " " + this.state.animateHeader}>
        <VisibilitySensor onChange={e => this.onChangeMailHeader(e)}>
          <span className="mail-form-header">
            Have a question or want to contact me?
          </span>
        </VisibilitySensor>
        <input
          className="mail-form-name"
          placeholder="Name"
          onChange={e => this.handleChangeName(e)}
          value={this.state.name}
        />
        <input
          className="mail-form-email"
          placeholder="Email address"
          onChange={e => this.handleChangeMail(e)}
          value={this.state.email}
        />
        <textarea
          className="mail-form-body"
          placeholder="Your Message"
          onChange={e => this.handleChangeBody(e)}
          required
          value={this.state.mailBody}
        />
        <input
          className="mail-form-button"
          type="button"
          value="SUBMIT"
          onClick={e => this.handleSubmit(e)}
        />
      </form>
    );
  }
}
