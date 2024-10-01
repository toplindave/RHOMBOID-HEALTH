import React from "react";
import { ReactComponent as User } from "../../globals/icons/user.svg";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="container bg-blue display-f justify-space-between pt-1 pb-1 font-norm __hero align-center">
      <p className="text-normalwhite font-weight-medium ">For Job seekers</p>

      <div className="text-normalwhite display-f justify-flex-end  __hero-inner align-center font-weight-medium">
        
          <div className="ml-3">Search</div>
        
        
          <div className="ml-3">Language</div>
        
       
          <Link
            className=" display-f align-center ml-3"
            to="../account/sign-in"
          >
           <User />
           <span>Account</span> 
          </Link>
        
      </div>
    </div>
  );
};

export default TopNav;
