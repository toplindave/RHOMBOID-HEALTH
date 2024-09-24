import React, { useState } from "react";
import "../../../styles/index.scss";
import { ReactComponent as Logo } from "../../../component/globals/images/logo.svg";
import { ReactComponent as UserLight } from "../../../component/globals/icons/userLight.svg";
import { ReactComponent as Location } from "../../../component/globals/icons/locationDotRegular.svg";
import { ReactComponent as SearchIcon } from "../../../component/globals/icons/searchSvg.svg";
import { ReactComponent as ArrowRight } from "../../../component/globals/icons/angleRightLight.svg";
import { ReactComponent as ArrowLeft } from "../../../component/globals/icons/angleLeftLight.svg";
import { ReactComponent as PlusIcon } from "../../../component/globals/icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../../component/globals/icons/minus.svg";
import AdultCare from "../../../component/globals/icons/adultcare.png";
import Faq from "../../../component/globals/images/faq.png";
import SearchWithIcon from "../../../component/globals/searchwithicon/SearchWithIcon";
import FaqDatas from "../../../data/FAQ/FaqData";
import FaqDropDown from "../../../component/FaqDropDown/FaqDropDown";
import RatingCards from "../../../data/ratingcard/RatingCards";
import RatingCard from "../../../component/ratingCard/RatingCard";
import Footer from "../../../component/globals/footer/Footer";

function HomeCare() {
  const [review, setReview] = useState(0);

  function nextReview() {
    if (review === 3) {
      setReview(0);
    } else {
      setReview((prev) => prev + 1);
    }
  }
  function previousReview() {
    if (review === 0) {
      setReview(3);
    } else {
      setReview((prev) => prev - 1);
    }
  }

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
            <div className="__floating bg-normalwhite display-f">
              <div className="__floating-input">
                <p className="normal-font-text">What brings you here today?</p>
                <SearchWithIcon img={<SearchIcon />} text={"Adult care"} />
              </div>
              <div className="__floating-input">
                <p className="normal-font-text">Location</p>
                <SearchWithIcon img={<Location />} text={"Ikeja"} />
              </div>
              <button className="bg-brown-green text-normalwhite normal-font-text">
                Find Care
              </button>
            </div>
          </div>
          <div className="__sub-right">
            <img src={AdultCare} alt="adult care" />
          </div>
        </div>
      </div>
      <div className="__care-service-section container-care">
        <div className="__care-service-section-top-con">
          <p className="p-text text-greenish font-weight-medium">
            Home care services
          </p>
        </div>
        <div className="__care-service-section-bottom-con display-f">
          <button className="display-f normal-font-text font-weight-semi bg-blueish  text-black-5">
            Adult care <ArrowRight />
          </button>
          <button className="display-f normal-font-text font-weight-semi bg-deep-green text-black-5">
            Children care <ArrowRight />
          </button>
          <button className="display-f normal-font-text font-weight-semi bg-peach text-black-5">
            Babysitting <ArrowRight />
          </button>
        </div>
      </div>
      <div className="__FAQ container-care display-f">
        <div className="__FAQ-img">
          <img src={Faq} alt="faq" />
        </div>
        <div className="__FAQ-questions">
          <h1 className="faq-header font-weight-semi text-brown-green">
            Frequently Asked Questions
          </h1>
          <p className="h3-text text-brown-green">
            Questions you might ask about our virtual primary care.
          </p>
          {FaqDatas.map((data, id) => (
            <FaqDropDown
              key={id}
              data={data}
              plus={<PlusIcon />}
              minus={<MinusIcon />}
            />
          ))}
          <div className="FAQ-sub-con">
            <h3 className="h3-text font-weight-semi text-brown-green">
              Still have questions?
            </h3>
            <p className="p-text text-brown-green">
              Can't find the answer you are looking for? Please contact with our
              customer service.
            </p>
            <button className="text-normalwhite font-weight-semi p-text bg-brown-green">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="__ratings bg-ash">
        <div className="__rating-top">
          <h3 className="h3-text font-weight-semi text-brown-green">
            Home care ratings and reviews
          </h3>
        </div>
        <div className="__rating-bg">
          <div className="__grid-box" />
          <div className="__grid-box" />
          <div className="__grid-box" />
          <div className="__grid-box" />

          <div className="__rating-content container-care display-f">
            <div className="__angle">
              <ArrowLeft onClick={previousReview} />
            </div>
            {review === 0 && (
              <div className="__rating-content-grid">
                {RatingCards.map((card, id) => (
                  <RatingCard key={id} card={card} />
                ))}
              </div>
            )}
            {review === 1 && (
              <div className="__rating-content-grid">
                {RatingCards.map((card, id) => (
                  <RatingCard key={id} card={card} />
                ))}
              </div>
            )}
            {review === 2 && (
              <div className="__rating-content-grid">
                {RatingCards.map((card, id) => (
                  <RatingCard key={id} card={card} />
                ))}
              </div>
            )}
            {review === 3 && (
              <div className="__rating-content-grid">
                {RatingCards.map((card, id) => (
                  <RatingCard key={id} card={card} />
                ))}
              </div>
            )}
            <div className="__angle">
              <ArrowRight onClick={nextReview} />
            </div>
          </div>
        </div>
      </div>
      <Footer bg={"bg-brown-green"} />
    </div>
  );
}

export default HomeCare;
