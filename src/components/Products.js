import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import "./Products.css";

const Products = () => {
  const [animateHeader, setAnimateHeader] = useState("");
  const [animateGalery, setAnimateGalery] = useState("");

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
            <div className="card"></div>
            <div className="product-text">
              <div className="bold">GLDNHRN</div>
              <span class="product-highlight">Business Solution</span>
            </div>
            <div className="product-button">LEARN MORE</div>
          </div>
        </div>
        <div className="product">
          <div>
            <div className="card"></div>
            <div className="product-text">
              <div className="bold">Lookout Eyes</div>
              <span class="product-highlight">Network Solution</span>
            </div>
            <div className="product-button">LEARN MORE</div>
          </div>
        </div>
        <div className="product">
          <div>
            <div className="card"></div>
            <div className="product-text">
              <div className="bold">CONIG</div>
              <span class="product-highlight">Business Process</span>
            </div>
            <div className="product-button">LEARN MORE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
