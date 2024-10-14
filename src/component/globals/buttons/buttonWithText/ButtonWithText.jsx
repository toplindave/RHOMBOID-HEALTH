import React from "react";
import "../../../../styles/index.scss";
import { ReactComponent as ArrowRight } from "../../icons/arrowRightLongLight.svg";
import { ReactComponent as Rhomboid } from "../../icons/rhombus.svg";

function ButtonWithText({ text }) {
  return (
    <div>
      <div className="__btn-texts mt-4">


        <div className="__arrow-bg">
          <ArrowRight />
        </div>


        <span className="text-primary ml-2 font-weight-semi">{text}</span>
        {/* <h2 className="text-primary p-text">{text}</h2> */}
      </div>
    </div>
  );
}

export default ButtonWithText;
