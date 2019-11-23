/* eslint-disable no-useless-concat */
import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

// import goldenhorn_banner from "../images/goldenhorn_banner.png";
import tac_egitim from "../images/tac_egitim.jpg";
import benefit from "../images/benefit.png";
import expert from "../images/expert.png";
import assets from "../images/assets.png";

import "./About.css";

const About = () => {
  const [animateHeader, setAnimateHeader] = useState("");
  const [animateCircles, setAnimateCircles] = useState("");
  const [animateText, setAnimateText] = useState("");
  const [animateInfoTop, setAnimateInfoTop] = useState("");
  const [animateInfoMiddle, setAnimateInfoMiddle] = useState("");
  const [animateInfoBottom, setAnimateInfoBottom] = useState("");
  const [animateContentsTop, setAnimateContentsTop] = useState("");
  const [animateContentsMiddle, setAnimateContentsMiddle] = useState("");
  const [animateContentsBottom, setAnimateContentsBottom] = useState("");

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

  const onChangeArticleTop = isVisible => {
    if (isVisible) {
      setAnimateInfoTop("animated slideIn-left");
      setAnimateContentsTop("animated slideIn-right");
    }
  };

  const onChangeArticleMiddle = isVisible => {
    if (isVisible) {
      setAnimateInfoMiddle("animated slideIn-right");
      setAnimateContentsMiddle("animated slideIn-left");
    }
  };

  const onChangeArticleBottom = isVisible => {
    if (isVisible) {
      setAnimateInfoBottom("animated slideIn-left");
      setAnimateContentsBottom("animated slideIn-right");
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
                <img src={benefit} alt="benefit" className="quality-image" />
              </div>
            </VisibilitySensor>
            <VisibilitySensor onChange={onChangeQualityText}>
              <div className={"quality-header" + " " + animateText}>
                <div className="quality-header-text">
                  Benefit Realization Approach
                </div>
                <div className="quality-text">
                  Our implementation approach is guided by practical
                  implementation and benefit realization. We have an outstanding
                  track record of projects implemented with leading corporations
                  in Turkey and GCC region.
                </div>
              </div>
            </VisibilitySensor>
          </div>

          <div className="quality">
            <div
              className={"circle" + " " + animateCircles}
              style={{ animationDelay: "0.2s" }}
            >
              <img src={expert} alt="expert" className="quality-image" />
            </div>
            <div
              className={"quality-header" + " " + animateText}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="quality-header-text">Expert Team</div>
              <div className="quality-text">
                Proved and certified expert in the governance and management of
                IT. Our expertise brings significant level of hands-on
                experience from different industries. We invest remarkable
                amounts to build up our capabilities and to ensure they are
                up-to-date and market relevant.
              </div>
            </div>
          </div>

          <div className="quality">
            <div
              className={"circle" + " " + animateCircles}
              style={{ animationDelay: "0.4s" }}
            >
              <img src={assets} alt="assets" className="quality-image" />
            </div>

            <div
              className={"quality-header" + " " + animateText}
              style={{ animationDelay: "0.4s" }}
            >
              <div className="quality-header-text">Assets</div>
              <div className="quality-text">
                Number of assets to execute against proven methodologies and our
                experience from our clients. Our unique approach and assets
                enable us to deliver value to our clients in faster, more
                comprehensive and more cost effective fashion than our
                competitors.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="info">
        <div className={"info-detail" + " " + animateInfoTop}>
          <img className="info-image" src={tac_egitim} alt="info" />
        </div>
        <div className={"contents" + " " + animateContentsTop}>
          <VisibilitySensor onChange={onChangeArticleTop}>
            <div className="content">
              <span className="content-title">
                Who <span className="highlight-title">we</span> are?
              </span>
              <br />
              TAC is an innovative consultancy and solution company, specialized
              in the best practice framework like COBIT, ITIL, PMBOK, Prince2,
              Agile, CMMI, eTOM, Togaf, Stage&Gate, BPMN and related solutions.
              Originally founded in 1999 as a company with limited liability we
              are represented by 50 employees at two locations Istanbul, Turkey.
            </div>
          </VisibilitySensor>
        </div>
      </div>
      <div className="info">
        <div className={"contents" + " " + animateContentsMiddle}>
          <VisibilitySensor onChange={onChangeArticleMiddle}>
            <div className="content">
              <span className="content-title">
                Our <span className="highlight-title">Mission</span>
              </span>
              <br />
              We are management consultants with international experience. We
              emphasize on objectivity, independence and practical relevance in
              all of our thoughts and activities. Our goal is providing holistic
              consulting, technology and education services. In cooperation with
              partners and system providers we deliver key-turn projects as
              single source solution competence. In addition to analysis and
              conception we focus on execution and realization. We are guided by
              the rule of benefits optimization for our clients. People and
              their Capabilities are the central elements of our business
              activities.
            </div>
          </VisibilitySensor>
        </div>
        <div className={"info-detail" + " " + animateInfoMiddle}>
          <img className="info-image" src={tac_egitim} alt="info" />
        </div>
      </div>
      <div className="info" style={{ paddingBottom: "100px" }}>
        <div className={"info-detail" + " " + animateInfoBottom}>
          <img className="info-image" src={tac_egitim} alt="info" />
        </div>
        <div className={"contents" + " " + animateContentsBottom}>
          <VisibilitySensor onChange={onChangeArticleBottom}>
            <div className="content">
              <span className="content-title">
                Our <span className="highlight-title">Services</span>
              </span>
              <br />
              Our Services are shaped based on de-facto requirements for
              successful governance and management in times of global
              competition and fast changes. They are based upon profound
              experience of our consultants we do not consult on topics, that we
              have not realized in own management responsibility ensure
              identification with goals and results by integrating the
              management team in the consulting engagement aim on short, mid and
              long term success of enterprise.
            </div>
          </VisibilitySensor>
        </div>
      </div>
    </div>
  );
};

export default About;
