import React from "react";
import { FiExternalLink } from "react-icons/fi";

import img1 from "../../images/gldnhrn_02.png";

const Goldenhorn = () => {
  return (
    <div className="modal">
      <div className="modal-image-container">
        <img src={img1} alt="img1" className="modal-img" />
      </div>
      <div className="modal-info">
        <div className="modal-title">GLDNHRN</div>
        <div className="modal-tag">Business Solution</div>
        <div className="modal-description">
          {" "}
          GLDNHRN is a powerful and comprehensive solution for business process
          and dynamic case management, which helps organizations to make
          better-informed decisions about business processes and dynamic cases
        </div>
        <div className="modal-button">
          <FiExternalLink className="linkicon" />
          <a
            className="modal-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.gldnhrn.com/index.php"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Goldenhorn;
