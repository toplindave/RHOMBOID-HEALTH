import React from "react";
import "../../../../styles/index.scss";
import { ReactComponent as Plus } from "../../../../component/globals/icons/plus.svg";

const CareFilter = ({ filter }) => {
  return (
    <div className="__filter display-f justify-space-between">
      <p className=" small-text font-weight-semi">{filter.title}</p>
      <Plus />
    </div>
  );
};

export default CareFilter;
