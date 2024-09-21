import React from 'react';
import { ReactComponent as User } from "../../globals/icons/user.svg";
import { Link } from 'react-router-dom';


const TopNav = () => {
  return (
    <div className="container bg-blue display-f justify-space-between pt-1 pb-1 font-norm __hero align-center">
        <p className="text-normalwhite ">For Job seekers</p>

        <div className="text-normalwhite display-f justify-space-between __hero-inner align-center">
          <p>
            <Link to="">Search</Link>
          </p>
          <p>
            <Link to="">Language</Link>
          </p>
          <div className="__hero-account">
            <Link
              className=" display-f justify-space-between align-center"
              to="../account/sign-in"
            >
              <div className="__hero-account-svg">
                <User />
              </div>
              <p>Account</p>
            </Link>
          </div>
        </div>


      </div>
  )
}

export default TopNav;