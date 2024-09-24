import React from "react";
import "../../../styles/index.scss";

function SearchWithIcon({ img, text }) {
  return (
    <div className="search-container-with-icon">
      <div className="search-input-box-with-icon  ">
        <span>{img}</span>
        <input type="text" placeholder={text} />
      </div>
    </div>
  );
}

export default SearchWithIcon;
