import React from "react";
import "../../../styles/index.scss";

function CareInfoSection({ careH3, carePText, CareImg }) {
  return (
    <div className="__care-info-section ">
      <div className="__care-info-section-left">
        <h3 className=" sub-title-text font-weight-semi text-greenish">
          {careH3}
        </h3>
        <p className=" p-text text-black-5">{carePText}</p>
      </div>
      <div className="__care-info-section-right">
        <img src={CareImg} alt="care" />
      </div>
    </div>
  );
}

export default CareInfoSection;
