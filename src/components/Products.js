/* eslint-disable no-useless-concat */
import React, { useState } from "react";
import Modal from "react-modal";
import VisibilitySensor from "react-visibility-sensor";
import { FiExternalLink } from "react-icons/fi";

import img1 from "../images/gldnhrn_02.png";
import img2 from "../images/fit_dg2.JPG";
import img3 from "../images/tac_egitim.jpg";

import "./Products.css";

const Products = () => {
  const [animateHeader, setAnimateHeader] = useState("");
  const [animateGalery, setAnimateGalery] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

  const onChangeHeader = isVisible => {
    if (isVisible) {
      setAnimateHeader("animated slideIn-left");
      setAnimateGalery("animated slideUp");
    }
  };

  return (
    <div id="products" className="products">
      <VisibilitySensor onChange={onChangeHeader}>
        <div className="container">
          <div className={"section-header" + " " + animateHeader}>products</div>
          <div
            className={"section-header-bar" + " " + animateHeader}
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </VisibilitySensor>
      <div className={"product-gallery" + " " + animateGalery}>
        <div className="product">
          <div>
            <div className="product-text">
              <div className="bold">GLDNHRN</div>
              <span className="product-highlight">Business Solution</span>
            </div>
            <div className="product-button" onClick={handleOpenModal}>
              LEARN MORE
            </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={handleCloseModal}
              className="product-modal"
            >
              <img src={img1} alt="img1" className="modal-img" />
              <p className="modal-project-name">GLDNHRN</p>
              <p className="modal-project-category">Business Solution</p>
              <p className="modal-project-description">
                GLDNHRN is a powerful and comprehensive solution for business
                process and dynamic case management, which helps organizations
                to make better-informed decisions about business processes and
                dynamic cases
              </p>
              <div className="modal-button">
                <FiExternalLink className="linkicon" />
                <a
                  className="modal-link"
                  target="_blank"
                  href="https://www.gldnhrn.com/index.php"
                >
                  VIEW SITE
                </a>
              </div>
            </Modal>
          </div>
        </div>
        <div className="product">
          <div>
            <div className="product-text">
              <div className="bold">Lookout Eyes</div>
              <span className="product-highlight">Network Solution</span>
            </div>
            <div className="product-button">LEARN MORE</div>
          </div>
        </div>
        <div className="product">
          <div>
            <div className="product-text">
              <div className="bold">CONIG</div>
              <span className="product-highlight">Business Process</span>
            </div>
            <div className="product-button">LEARN MORE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
