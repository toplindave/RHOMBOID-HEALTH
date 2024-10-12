import React from "react";
import "../../../../styles/index.scss";
import { ReactComponent as Star } from "../../../../component/globals/icons/starSharpSolid.svg";
import { ReactComponent as AngleLeft } from "../../../../component/globals/icons/angleLeftLight.svg";
import { ReactComponent as AngleRight } from "../../../../component/globals/icons/angleRightLight.svg";
import { ReactComponent as ThumbsDown } from "../../../../component/globals/icons/thumbsDownLight.svg";
import { ReactComponent as ThumbsUp } from "../../../../component/globals/icons/thumbsUpLight.svg";
import { ReactComponent as Verified } from "../../../../component/globals/icons/badgeCheckSolid.svg";
import { useParams } from "react-router-dom";
import Caregiverdata from "../../../../data/Caregiverdata.json";

function CaregiverDetails() {
  const { careGiverId } = useParams();
  const thisDetails = Caregiverdata.find((detail) => detail.id === careGiverId);
  // const { firstName } = thisDetails;
  // console.log("render", firstName);
  return (
    <div className="__caregiver-details-container">
      <div className="__caregiver-details-sub-container">
        <div className="__caregiver-details-top-container">
          <div className="display-f justify-space-between">
            <div className="__caregiver-details-name-and-rating">
              <h3 className="title-text font-weight-semi text-normalblack">
                Dr. {thisDetails.firstName} &nbsp;
                {thisDetails.lastName}
              </h3>
              <div className="__details-star-rating display-f justify-space-between align-center">
                <div className="__detail-star">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <h4 className="__detail-star-rate font-weight-semi normal-font-text text-normalblack">
                  5.0
                </h4>
                <p className=" text-normalblack normal-font-text"> (500)</p>
              </div>
              <h5 className=" text-normalblack font-weight-semi normal-font-text">
                {thisDetails.speciality}
              </h5>
            </div>
            <div className="__caregiver-detail-img-container"></div>
          </div>
          <div className="__details-availability-btn-container display-f justify-center align-center">
            <div className="__details-availability-btn-sub-container display-f justify-space-between">
              <button className="__details-available-btn font-weight-medium normal-font-text text-brown-green ">
                Availability
              </button>
              <button className="__details-detail-btn font-weight-medium normal-font-text text-brown-green ">
                Details
              </button>
            </div>
          </div>
        </div>
        <div className="__caregiver-details-date-section display-f justify-space-between bg-ash">
          <div className="__direction-btn">
            <AngleLeft />
          </div>
          <div className="__caregiver-details-date-grid-container">
            {thisDetails.availabilities.map((availability, id) => (
              <div
                className="__caregiver-details-available-date-and-time"
                key={id}
              >
                <h4 className=" normal-font-text font-weight-semi">
                  {availability.day}
                </h4>
                <ul>
                  {availability.shifts.map((shift, id) => (
                    <li className=" normal-font-text text-brown-green" key={id}>
                      {shift}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="__direction-btn">
            <AngleRight />
          </div>
        </div>
        <div className="__caregiver-details-about-section-all">
          <div className="__caregiver-details-about-container">
            <h4 className="text-normalblack font-weight-semi normal-font-text">
              About {thisDetails.firstName}
            </h4>

            <p className="normal-font-text text-normalblack">
              {thisDetails.about}
            </p>
          </div>
          <div className="__caregiver-details-credentials-container">
            <h4 className="text-normalblack font-weight-semi normal-font-text">
              Credentials
            </h4>
            <div className="__credential-sub display-f justify-space-between">
              <div className="">
                <h5 className="small-text text-normalblack font-weight-semi">
                  Specialities
                </h5>
                <p className="small-text text-normalblack ">
                  {thisDetails.speciality}
                </p>
              </div>
              <div className="">
                <h5 className="small-text text-normalblack font-weight-semi">
                  Practice name
                </h5>
                <p className="small-text text-normalblack ">
                  {thisDetails.firstName} &nbsp;
                  {thisDetails.lastName}
                </p>
              </div>
              <div className="">
                <h5 className="small-text text-normalblack font-weight-semi">
                  Language spoken
                </h5>
                <div className="__languages display-f ">
                  {thisDetails.languages.map((language, id) => (
                    <p className="small-text text-normalblack " key={id}>
                      {language}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="__caregiver-details-reviews-container">
            <h4 className="text-normalblack font-weight-semi normal-font-text">
              Reviews
            </h4>
            <div className="__review-sub display-f justify-space-between">
              <div className="__overall-rating">
                <h5 className="small-text text-normalblack font-weight-semi">
                  Overall satisfaction
                </h5>
                <div className="__overall-star display-f justify-space-between">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <h2 className="__overall-star-ratingg title-text font-weight-semi text-normalblack">
                  5
                </h2>
                <select name="" id="" className=" small-text">
                  <option value="" className=" small-text">
                    Most recent
                  </option>
                  <option value="" className=" small-text">
                    Rating
                  </option>
                  <option value="" className=" small-text">
                    Most view
                  </option>
                </select>
              </div>
              <div className="__total-reviewss">
                <h5 className="small-text text-normalblack font-weight-semi">
                  Total review
                </h5>
                <h2 className="__total-review-h2 title-text font-weight-semi text-normalblack">
                  500
                </h2>
              </div>
              <div className="__waiting-time">
                <div className="__waiting-time-sub display-f justify-space-between">
                  <p className="small-text text-normalblack">Waiting time</p>
                  <h6 className="small-text text-normalblack font-weight-semi">
                    4.5
                  </h6>
                </div>
                <div className="__waiting-time-sub display-f justify-space-between">
                  <p className="small-text text-normalblack">Would recommend</p>
                  <h6 className="small-text text-normalblack font-weight-semi">
                    4.6
                  </h6>
                </div>
                <div className="__waiting-time-sub display-f justify-space-between">
                  <p className="small-text text-normalblack">Professionalism</p>
                  <h6 className="small-text text-normalblack font-weight-semi">
                    4.6
                  </h6>
                </div>
                <div className="__waiting-time-sub display-f justify-space-between">
                  <p className="small-text text-normalblack">
                    Would visit again
                  </p>
                  <h6 className="small-text text-normalblack font-weight-semi">
                    4.6
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="__caregiver-details-testimony-container">
            {thisDetails.reviews.map((review) => (
              <div
                className="__satisfied display-f justify-space-between"
                key={review.reviewId}
              >
                <div className="__thumbs">
                  {review.liked ? (
                    <ThumbsUp className="__thumbs-up" />
                  ) : (
                    <ThumbsDown className="__thumbs-down" />
                  )}
                  {review.liked ? (
                    <p className="__thumbs-text-satisfied small-text text-normalblack font-weight-semi">
                      Satisfied
                    </p>
                  ) : (
                    <p className="__thumbs-text-unsatisfied small-text text-normalblack font-weight-semi">
                      Unsatisfied
                    </p>
                  )}
                  <p className="__testimony-text p-text text-normalblack">
                    {review.comment}
                  </p>
                  <p className="__testimony-date small-text text-normalblack">
                    {review.createdAt}
                  </p>
                </div>
                {review.verifiedPatient ? (
                  <div className="__verified display-f justify-space-between">
                    <Verified />
                    <p className="small-text text-normalblack">
                      Verified patient
                    </p>
                  </div>
                ) : (
                  <div className="__unverified display-f justify-space-between">
                    <Verified />
                    <p className="small-text text-normalblack">
                      Unverified patient
                    </p>
                  </div>
                )}
              </div>
            ))}
            {/* <div className="__unsatisfied display-f justify-space-between">
              <div className="__thumbs">
                <ThumbsDown />
                <p className="__thumbs-text small-text text-normalblack font-weight-semi">
                  Unsatisfied
                </p>
                <p className="__testimony-text p-text text-normalblack">
                  Competent, professional, create high confidence in medical
                  jugdement
                </p>
                <p className="__testimony-date small-text text-normalblack">
                  1 week ago
                </p>
              </div>
              <div className="__verified display-f justify-space-between">
                <Verified />
                <p className="small-text text-normalblack">Verified patient</p>
              </div>
            </div>
            <div className="__satisfied display-f justify-space-between">
              <div className="__thumbs">
                <ThumbsUp />
                <p className="__thumbs-text small-text text-normalblack font-weight-semi">
                  Satisfied
                </p>
                <p className="__testimony-text p-text text-normalblack">
                  Competent, professional, create high confidence in medical
                  jugdement
                </p>
                <p className="__testimony-date small-text text-normalblack">
                  1 week ago
                </p>
              </div>
              <div className="__verified display-f justify-space-between">
                <Verified />
                <p className="small-text text-normalblack">Verified patient</p>
              </div>
            </div>
            <div className="__unsatisfied display-f justify-space-between">
              <div className="__thumbs">
                <ThumbsDown />
                <p className="__thumbs-text small-text text-normalblack font-weight-semi">
                  Unsatisfied
                </p>
                <p className="__testimony-text p-text text-normalblack">
                  Competent, professional, create high confidence in medical
                  jugdement
                </p>
                <p className="__testimony-date small-text text-normalblack">
                  1 week ago
                </p>
              </div>
              <div className="__verified display-f justify-space-between">
                <Verified />
                <p className="small-text text-normalblack">Verified patient</p>
              </div>
            </div> */}
          </div>
          <div className="__more-review-btn-container">
            <button className="__more-review-btn normal-font-text text-brown-green ">
              Read more reviews
            </button>
          </div>
        </div>
      </div>
      <div className="__details-request-caregiver-container display-f justify-center align-center">
        <button className=" text-normalwhite p-text bg-black-5">
          Request caregiver
        </button>
      </div>
    </div>
  );
}

export default CaregiverDetails;
