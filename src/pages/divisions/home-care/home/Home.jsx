import { ReactComponent as SearchIcon } from "../../../../component/globals/icons/searchSvg.svg";
import { ReactComponent as ArrowRight } from "../../../../component/globals/icons/angleRightLight.svg";
import { ReactComponent as ArrowLeft } from "../../../../component/globals/icons/angleLeftLight.svg";
import { ReactComponent as PlusIcon } from "../../../../component/globals/icons/plus.svg";
import { ReactComponent as MinusIcon } from "../../../../component/globals/icons/minus.svg";
import { ReactComponent as Location } from "../../../../component/globals/icons/locationDotRegular.svg";
import AdultCare from "../../../../component/globals/icons/adultcare.png";
import Faq from "../../../../component/globals/images/faq.png";
import SearchWithIcon from "../../../../component/globals/searchwithicon/SearchWithIcon";
import FaqDatas from "../../../../data/FAQ/FaqData";
import FaqDropDown from "../../../../component/FaqDropDown/FaqDropDown";
import RatingCards from "../../../../data/ratingcard/RatingCards";
import RatingCard from "../../../../component/ratingCard/RatingCard";
import "../../../../styles/index.scss";
import { useEffect, useState, useRef, useContext } from "react";
import { searchData } from "../../../../utils/homecare/searchData";
import DataContext from "../../../../context/DataContext";





const Home = () => {


  const homeRef = useRef();

  const { currentCity } = useContext(DataContext);

  const [showAdult, setShowAdult] = useState(false);
  const [showLocation, setShowLocation] = useState(false);


  const [typeOfCare, setTypeOfCare] = useState(null);
  const [location, setLocation] = useState(null);
 

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

  const handleAdult = () => {
    setShowAdult(true);
    setShowLocation(false);
  }
  const handleLocation = () => {
    setShowAdult(false);
    setShowLocation(true);
  }





    function handleClickOutside() {

      if (showAdult || showLocation) {
        setShowLocation(false);

        setShowAdult(false);

      }

    };


  const onChangeCare = (e) => {
    const value = e.target.textContent;
    setTypeOfCare(value);
 
  }

  const onChangeLocation = (e) => {
    const value = e.target.textContent;
    setLocation(value);
   
  }




  return (
    <div
      onClick={handleClickOutside}
    >
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
                <p className="font-weight-normal font-md">What brings you here today?</p>
                <SearchWithIcon
                  img={<SearchIcon />}
                  text={"Adult care"}
                  id={1}
                  content={searchData[0]}
                  showContent={showAdult}
                  setShowContent={setShowAdult}
                  action={handleAdult}
                  value={typeOfCare ? typeOfCare : "Adult care"}
                  onChange = {onChangeCare}
                   
                />

              </div>
              <div className="__floating-input">
                <p className="font-weight-normal font-md">Location</p>
                <SearchWithIcon
                  img={<Location />}
                  text={currentCity}
                  id={2}
                  content={searchData[1]}
                  showContent={showLocation}
                  setShowContent={setShowLocation}
                  action={handleLocation}
                  value={location ? location : currentCity ? currentCity : ""}
                  onChange = {onChangeLocation}
                 
                />

              </div>
              <button className="bg-brown-green text-normalwhite font-weight-semi font-md">
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
    </div>
  )
}

export default Home;