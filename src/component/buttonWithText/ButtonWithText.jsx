import React from "react";
import "../../styles/index.scss";
import { ReactComponent as ArrowRight } from "../../pages/landing/icons/arrowRightLongLight.svg";

function ButtonWithText({ text }) {
  return (
    <div>
      <div className="__btn-texts mt-4">
        <div className="__arrow-bg bg-primary-1 ">
          <ArrowRight />
        </div>
        <h2 className=" text-primary p-text">{text}</h2>
      </div>
    </div>
  );
}

export default ButtonWithText;
