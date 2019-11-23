import React from "react";
import { FiExternalLink } from "react-icons/fi";

import img3 from "../../images/conig.png";

const Conig = () => {
  return (
    <div className="modal">
      <div className="modal-image-container">
        <img src={img3} alt="img1" className="modal-img" />
      </div>
      <div className="modal-info">
        <div className="modal-title">CONIG</div>
        <div className="modal-tag">Process Solution</div>
        <div className="modal-description">
          {" "}
          CONIG® (Converged Information Governance) is a governance framework
          developed by TAC A.S. addressing information and related technologies.
          Its main focus is INFORMATION. CONIG® is based on models that are
          widely used for Information Technologies, Corporate Governance as well
          as Business Governance.
        </div>
        <div className="modal-button">
          <FiExternalLink className="linkicon" />
          <a
            className="modal-link"
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.conig.org/"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Conig;
