import React from 'react'
import "../../../../styles/index.scss";
import { ReactComponent as UserLight } from "../../../globals/icons/userLight.svg";
import { ReactComponent as Location } from "../../../globals/icons/locationDotRegular.svg";
import { Link } from 'react-router-dom';



const HomeCareMainNav = () => {
  return (
    
    <div className=" __care-nav container-care bg-ash font-weight-semi normal-font-text display-f justify-space-between  pt-2 pb-2">
      <div className="__care-nav-location display-f justify-space-between  ">
        <p className=" display-f justify-space-between text-greenish">
          <Location />
          Ikeja, Lagos
        </p>
      </div>
      <ul className="display-f justify-space-between ">
        <Link to="/rhomboid/home-care/adult-care" className="font-md text-normalblack">Adult care</Link>
        <Link to="/rhomboid/home-care/children-care" className=" font-md text-normalblack">Children care</Link>
        <Link to="/rhomboid/home-care/account" className="font-md display-f justify-space-between text-greenish">
          <UserLight /> Account
        </Link>
      </ul>
    </div>
    
  )
}

export default HomeCareMainNav