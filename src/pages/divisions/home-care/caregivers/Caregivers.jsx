import React, { useState } from "react";
import "../../../../styles/index.scss";
import { ReactComponent as FilterIcon } from "../../../../component/globals/icons/filterIcon.svg";

import CareGiversFilters from "../../../../data/caregiver-filter/CareGiverFilter";
import CareFilter from "../../../../component/divisions/home-care/care-filter/CareFilter";
import Caregiver from "../../../../component/divisions/home-care/caregiver/Caregiver";
import CaregiverDatas from "../../../../data/Caregiverdata.json";
const Caregivers = () => {
  const [openSort, setOpenSort] = useState(false);
  function handleOpen() {
    setOpenSort((prev) => !prev);
  }
  return (
    <div className="__caregivers ">
      <div className="__caregivers-side-bar">
        <h1 className="h3-text">Our Caregivers</h1>
        <div className="__search-input-and-filter-icon display-f justify-space-between">
          <input
            type="text"
            className="small-text"
            placeholder="Search for any keyword"
          />
          <div className="__filter-icon-container" onClick={handleOpen}>
            <FilterIcon />
          </div>
        </div>
        {openSort && (
          <div className="__filter-and-sort">
            <h4 className="__filter-and-sort-h4 small-text font-weight-medium ">
              Filter & Sort
            </h4>

            <div>
              {CareGiversFilters.map((filter, id) => (
                <CareFilter key={id} filter={filter} />
              ))}
            </div>
          </div>
        )}

        <div className="__filter-and-sort-media">
          <h4 className="__filter-and-sort-h4 small-text font-weight-medium ">
            Filter & Sort
          </h4>

          <div>
            {CareGiversFilters.map((filter, id) => (
              <CareFilter key={id} filter={filter} />
            ))}
          </div>
        </div>
      </div>
      <div className="__caregivers-main-content ">
        <div className="__caregivers-main-content-con">
          {CaregiverDatas.map((caregiverData) => (
            <Caregiver caregiverData={caregiverData} key={caregiverData.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Caregivers;
