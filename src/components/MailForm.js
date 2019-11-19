/* eslint-disable no-useless-concat */
import React from "react";
import { MdClose } from "react-icons/md";
import VisibilitySensor from "react-visibility-sensor";

import "./MailForm.css";

export default class extends React.Component {
  state = {
    mailBody: "",
    name: "",
    email: "",
    animateHeader: "",
    isOpen: false,
    isError: false
  };

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

  sendFeedback = async (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        this.setState({
          mailBody: "",
          name: "",
          email: "",
          isOpen: true,
          isError: false
        });
      })
      .catch(err => this.setState({ isOpen: true, isError: true }));
  };

  renderMailRespone() {
    if (this.state.isOpen) {
      if (this.state.isError) {
        return (
          <div className="mail-response-fail">
            There was an error. Please try again later!
            <MdClose
              className="close-button"
              onClick={() => this.setState({ isOpen: false })}
            />
          </div>
        );
      }
      return (
        <div className="mail-response-success">
          Your message was sent successfully. Thanks!
          <MdClose
            className="close-button"
            onClick={() => this.setState({ isOpen: false })}
          />
        </div>
      );
    }
  }

  onChangeMailHeader = isVisible => {
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
        {this.renderMailRespone()}
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
