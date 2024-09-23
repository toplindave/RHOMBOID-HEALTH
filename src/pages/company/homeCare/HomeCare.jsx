import React from "react";
import "../../../styles/index.scss";
import { ReactComponent as Logo } from "../../../component/globals/images/logo.svg";
import { ReactComponent as UserLight } from "../../../component/globals/icons/userLight.svg";
import { ReactComponent as Location } from "../../../component/globals/icons/locationDotRegular.svg";
import AdultCare from "../../../component/globals/icons/adultcare.png";

function HomeCare() {
  return (
    <div className="bg-normalwhite">
      <div className="__care-logo">
        <Logo />
      </div>
      <div className=" __care-nav container-care bg-ash font-weight-semi normal-font-text display-f justify-space-between  pt-2 pb-2">
        <div className="__care-nav-location display-f justify-space-between  ">
          <p className=" display-f justify-space-between text-greenish">
            <Location />
            Ikeja, Lagos
          </p>
        </div>
        <ul className="display-f justify-space-between ">
          <li className="text-normalblack">Adult care</li>
          <li className="text-normalblack">Children care</li>
          <li className="display-f justify-space-between text-greenish">
            <UserLight /> Account
          </li>
        </ul>
      </div>
      <div className="__care-section-1 container-care">
        <div className="__sub-section-1 bg-ash display-f justify-space-between">
          <div className="__sub-left">
            <h1 className="care-header font-weight-semi text-green ">
              Compassionate Care, Every Step of the Way
            </h1>
            <p className="p-text font-weight-medium text-greenish">
              Maintain a higher quality of life, often in the comfort of their
              own homes.
            </p>
          </div>
          <div className="__sub-right">
            <img src={AdultCare} alt="adult care" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCare;
