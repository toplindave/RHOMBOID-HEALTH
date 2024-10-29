import React from "react";
import "../../../../styles/index.scss";
import { ReactComponent as Star } from "../../../../component/globals/icons/starSharpSolid.svg";
import Doctor from "../../../globals/images/Nursing_male.jpg";
import { Link } from "react-router-dom";

const Caregiver = ({ caregiverData }) => {
  return (
    <div className="__caregiver-card-container">
      <div className="__type-of-care bg-primary-5">
        <p className="small-text text-brown-green font-weight-medium">
          {caregiverData.speciality}
        </p>
      </div>
      <div className="__caregiver-card">
        <div className="__caregiver-prof-top">
          <div className="__caregiver-img">
            <img src={Doctor} alt="doctor" />
          </div>
          <h4 className="__caregiver-name p-text text-greenish font-weight-semi">
            {caregiverData.firstName} {caregiverData.lastName}
          </h4>
          <div className="__caregiver-availability  ">
            <p className="__care-availability-text text-primary bg-primary-3 small-text font-weight-bold">
              Available today
            </p>
          </div>
          <div className="__caregiver-rating display-f justify-space-between align-center">
            <div className="__caregiver-stars ">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p className="__caregiver-stars-count small-text font-weight-bold text-normalblack">
              5.0
            </p>
            <p className="__caregiver-stars-total small-text text-normalblack">
              (2304)
            </p>
          </div>
        </div>
        <div className="__caregiver-prof-bottom">
          <div className="__caregiver-date-and-time display-f justify-space-between align-center">
            <p className="__caregiver-date text-greenish font-weight-semi small-text">
              Wed, Jan 24, 2024
            </p>
            <p className="__caregiver-time text-normalwhite bg-green font-weight-medium small-text">
              3 PM - 11 PM
            </p>
          </div>
          <p className="__moretimes text-orange small-text font-weight-semi">
            <Link to={`/rhomboid/home-care/caregivers/${caregiverData.id}`}>
              More times
            </Link>
          </p>
          <button className="__caregiver-btn text-normalwhite bg-black-5 font-weight-bold">
            Request Caregiver
          </button>
        </div>
      </div>
    </div>
  );
};

export default Caregiver;
