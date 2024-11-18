import React, { useContext, useEffect, useRef, useState } from 'react'
import "../../../../styles/index.scss";
import { ReactComponent as UserLight } from "../../../globals/icons/userLight.svg";
import { ReactComponent as Location } from "../../../globals/icons/locationDotRegular.svg";
import { Link, useLocation } from 'react-router-dom';
import CareNavDropDown from './navdropdown/CareNavDropDown';
import NavContext from '../../../../context/NavContext';
import useGeolocation from '../../../../hooks/useGeolocation';
import DataContext from '../../../../context/DataContext';
import AccountNavDropDown from './navdropdown/AccountNavDropDown';
import ProgressBar from '../../../globals/progress-indicator/ProgressBar';




const HomeCareMainNav = () => {

  const location = useLocation();


  const { showNavDropDown, setShowNavDropDown, showCareDropDown, setShowCareDropDown } = useContext(NavContext);


  const { currentCity, currentState, regionPending, user } = useContext(DataContext);

  const linkRef = useRef();
  const cLinkRef = useRef();


  useEffect(() => {

    function handleClickOutside(e) {

      if (showNavDropDown && (e.target.toString() !== linkRef.current.toString())) {
        setShowNavDropDown(false);
      }

    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);

    }


  }, [showNavDropDown]);



  useEffect(() => {

    function handleClickOutside(e) {

      if (showCareDropDown && (e.target.toString() !== cLinkRef.current.toString())) {
        setShowCareDropDown(false);
      }

    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);

    }


  }, [showCareDropDown]);




  const handleAccountDropdown = () => {

    if (showNavDropDown) {
      setShowNavDropDown(false);
    } else {
      setShowCareDropDown(false);
      setShowNavDropDown(true);

    }


  }


  const handleCareDropdown = () => {

    if (showCareDropDown) {
      setShowCareDropDown(false);
    } else {
      setShowNavDropDown(false);
      setShowCareDropDown(true);

    }


  }



  return (
    <div className='main-care-nav'>

      <div className=" __care-nav container-care bg-ash font-weight-semi normal-font-text display-f justify-space-between  pt-2 pb-2">



        <div className="__care-nav-location display-f justify-space-between  ">
          <p className=" display-f justify-space-between text-greenish">
            <Location />
            {regionPending && !currentCity ? "fetching current location ..." : `${currentCity}, ${currentState}`}
          </p>
        </div>

        <ul className="display-f justify-space-between ">
          <Link to="/rhomboid/home-care/adult-care" className="font-md text-normalblack">Adult care</Link>

          <div className="h-account-link font-md text-normalblack">
            <span
              className="font-md display-f justify-space-between text-greenish"
              onClick={handleCareDropdown}
              ref={cLinkRef}
            >
              Children care

            </span>

            <CareNavDropDown />

          </div>



          {!user ?
            <Link to="/rhomboid/home-care/account/sign-in" className=" font-md text-normalblack">Account</Link>
            :

            <div
              className="h-account-link"
            >
              <span
                className="font-md display-f justify-space-between text-greenish"
                onClick={handleAccountDropdown}
                ref={linkRef}
              >
                <UserLight /> Account

              </span>

              {/* <div style={spanSTy} >
              rrrrr
            </div> */}
              <AccountNavDropDown />


            </div>

          }
        </ul>


      </div>
      {location.pathname.includes("find-care") ? <ProgressBar /> : <span></span> }


    </div>
  );
};

export default HomeCareMainNav;
