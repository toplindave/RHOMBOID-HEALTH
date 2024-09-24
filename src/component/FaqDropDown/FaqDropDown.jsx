import React, { useState } from "react";
import "../../styles/index.scss";

function FaqDropDown({ data, plus, minus }) {
  const [faqDropDown, setFaqDropDown] = useState(false);
  function handleDropDown() {
    setFaqDropDown((prev) => !prev);
  }
  return (
    <div>
      <div className="FAQ-dropdown-container bg-light-black" key={data.id}>
        <div className="FAQ-drop display-f" onClick={handleDropDown}>
          <p className="p-text font-weight-semi text-brown-green ">
            {data.title}
          </p>
          <div className="FAQ-drop-btn">{faqDropDown ? minus : plus}</div>
        </div>
        {faqDropDown && (
          <div className="FAQ-dropdown">
            <p className="p-text text-brown-green">{data.text}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FaqDropDown;
