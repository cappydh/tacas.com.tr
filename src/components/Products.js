/* eslint-disable no-useless-concat */
import React, { useState } from "react";
import Modal from "react-modal";
import VisibilitySensor from "react-visibility-sensor";
import Goldenhorn from "./products/Goldenhorn";
import LookoutEyes from "./products/LookoutEyes";
import Conig from "./products/Conig";

import "./Products.css";

const Products = () => {
  const [animateHeader, setAnimateHeader] = useState("");
  const [animateGalery, setAnimateGalery] = useState("");

  const [animateCloseModal, setAnimateCloseModal] = useState("");

  const [modalIsOpenGldnhrn, setIsOpenGldnhrn] = useState(false);
  const [modalIsOpenLOE, setIsOpenLOE] = useState(false);
  const [modalIsOpenConig, setIsOpenConig] = useState(false);

  function handleOpenModalGldnhrn() {
    setIsOpenGldnhrn(true);
    setAnimateCloseModal("");
  }

  function handleOpenModalLOE() {
    setIsOpenLOE(true);
    setAnimateCloseModal("");
  }

  function handleOpenModalConig() {
    setIsOpenConig(true);
    setAnimateCloseModal("");
  }

  function onRequestClose() {
    setIsOpenGldnhrn(false);
    setIsOpenLOE(false);
    setIsOpenConig(false);
    setAnimateCloseModal("close-modal");
  }

  const onChangeHeader = isVisible => {
    if (isVisible) {
      setAnimateHeader("animated slideIn-left");
      setAnimateGalery("animated slideUp");
    }
  };

  Modal.setAppElement("#root");

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
            <div className="product-button" onClick={handleOpenModalGldnhrn}>
              LEARN MORE
            </div>
            <Modal
              isOpen={modalIsOpenGldnhrn}
              className={"product-modal" + " " + animateCloseModal}
              onRequestClose={() => onRequestClose()}
              closeTimeoutMS={300}
              htmlOpenClassName="modal-html"
            >
              <Goldenhorn />
            </Modal>
          </div>
        </div>
        <div className="product">
          <div>
            <div className="product-text">
              <div className="bold">Lookout Eyes</div>
              <span className="product-highlight">Network Solution</span>
            </div>
            <div className="product-button" onClick={handleOpenModalLOE}>
              LEARN MORE
            </div>
          </div>
          <Modal
            isOpen={modalIsOpenLOE}
            className={"product-modal" + " " + animateCloseModal}
            onRequestClose={() => onRequestClose()}
            closeTimeoutMS={300}
            htmlOpenClassName="modal-html"
          >
            <LookoutEyes />
          </Modal>
        </div>
        <div className="product">
          <div>
            <div className="product-text">
              <div className="bold">CONIG</div>
              <span className="product-highlight">Business Process</span>
            </div>
            <div className="product-button" onClick={handleOpenModalConig}>
              LEARN MORE
            </div>
          </div>
          <Modal
            isOpen={modalIsOpenConig}
            className={"product-modal" + " " + animateCloseModal}
            onRequestClose={() => onRequestClose()}
            closeTimeoutMS={300}
            htmlOpenClassName="modal-html"
          >
            <Conig />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Products;
