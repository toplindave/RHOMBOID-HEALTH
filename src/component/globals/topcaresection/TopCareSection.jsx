import React from "react";
import "../../../styles/index.scss";
import SearchWithIcon from "../searchwithicon/SearchWithIcon";
import { ReactComponent as Location } from "../../../component/globals/icons/locationDotRegular.svg";

function TopCareSection({ btnText, text, h1Text }) {
  return (
    <div className="__topcare-section display-f ">
      <h1 className=" sub-title-text font-weight-bold text-greenish">
        {h1Text}
      </h1>
      <div className="__location-input-and-find-care-container display-f">
        <SearchWithIcon
          img={<Location />}
          text={text}
          className="__topcare-input"
          //   id={2}
          //   content={searchData[1]}
          //   showContent={showLocation}
          //   setShowContent={setShowLocation}
          //   action={handleLocation}
          //   value={location ? location : currentCity ? currentCity : ""}
          //   onChange={onChangeLocation}
        />
        <button className=" text-normalwhite bg-brown-green font-weight-semi normal-font-text">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default TopCareSection;
