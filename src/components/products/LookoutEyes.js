import React from "react";
import { FiExternalLink } from "react-icons/fi";

import img2 from "../../images/loe2.png";

const LookoutEyes = () => {
  return (
    <div className="modal">
      <div className="modal-image-container">
        <img src={img2} alt="img2" className="modal-img" />
      </div>
      <div className="modal-info">
        <div className="modal-title">Lookout Eyes</div>
        <div className="modal-tag">Network Solution</div>
        <div className="modal-description">
          {" "}
          Lookout Eyes is the leading network monitoring and measurement
          solution adopted by major telcos in Turkey. We have a proven track
          record of projects with biggest corporations of Turkey from different
          sectors. Lookout Eyes Moduls
        </div>
        <div className="modal-button">
          <FiExternalLink className="linkicon" />
          <a
            className="modal-link"
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.lookouteyes.com/"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default LookoutEyes;
