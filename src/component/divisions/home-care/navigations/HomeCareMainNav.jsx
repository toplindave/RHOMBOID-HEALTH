import React, { useContext, useEffect, useRef, useState } from 'react'
import "../../../../styles/index.scss";
import { ReactComponent as UserLight } from "../../../globals/icons/userLight.svg";
import { ReactComponent as Location } from "../../../globals/icons/locationDotRegular.svg";
import { Link } from 'react-router-dom';
import CareNavDropDown from './navdropdown/CareNavDropDown';
import NavContext from '../../../../context/NavContext';
import useGeolocation from '../../../../hooks/useGeolocation';
import DataContext from '../../../../context/DataContext';




const HomeCareMainNav = () => {
  const { showNavDropDown, setShowNavDropDown } = useContext(NavContext);


  const { currentCity, currentState, regionPending, user } = useContext(DataContext);

  const linkRef = useRef();


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




  const handleDropdown = () => {

    if (showNavDropDown) {
      setShowNavDropDown(false);
    } else {
      setShowNavDropDown(true);

    }


  }

  // const spanSTy = {
  //   position: "absolute",
  //   top: "50px",
  //   right: "0",
  //   width: "50vw",
  //   height: "50vh",
  //   border: "1px solid red"
  // }

  // console.log(showNavDropDown);


  return (

    <div className=" __care-nav container-care bg-ash font-weight-semi normal-font-text display-f justify-space-between  pt-2 pb-2">
      <div className="__care-nav-location display-f justify-space-between  ">
        <p className=" display-f justify-space-between text-greenish">
          <Location />
          {regionPending && !currentCity ? "fetching current location ..." : `${currentCity}, ${currentState}`}
        </p>
      </div>

      <ul className="display-f justify-space-between ">
        <Link to="/rhomboid/home-care/adult-care" className="font-md text-normalblack">Adult care</Link>
        <Link to="/rhomboid/home-care/children-care" className=" font-md text-normalblack">Children care</Link>
        {!user ?
          <Link to="/rhomboid/home-care/account/sign-in" className=" font-md text-normalblack">Account</Link>
          :

          <div
            className="h-account-link"
          >
            <span
              className="font-md display-f justify-space-between text-greenish"
              onClick={handleDropdown}
              ref={linkRef}
            >
              <UserLight /> Account

            </span>

            {/* <div style={spanSTy} >
              rrrrr
            </div> */}
            <CareNavDropDown />


          </div>

        }
      </ul>
    </div>


  );
};

export default HomeCareMainNav;
