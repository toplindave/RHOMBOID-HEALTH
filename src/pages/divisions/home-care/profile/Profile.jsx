import React from "react";
import "../../../../styles/index.scss";
import { ReactComponent as User } from "../../../../component/globals/icons/userLight.svg";
import { ReactComponent as Envelope } from "../../../../component/globals/icons/envelope-sharp-light.svg";
import { ReactComponent as Location } from "../../../../component/globals/icons/locationDotRegular.svg";
import { ReactComponent as AngleRight } from "../../../../component/globals/icons/angleRightLight.svg";

function Profile() {
  return (
    <div className="__caregiver-profile">
      <h1 className=" font-weight-semi text-greenish sub-title-text">
        Account
      </h1>
      <div className="__profile-btn-section display-f justify-space-between align-center ">
        <button className=" text-brown-green font-weight-semi p-text">
          Personal Information
        </button>
        <button className=" text-brown-green font-weight-semi p-text">
          Wallet
        </button>
        <button className=" text-brown-green font-weight-semi p-text">
          Sign in & Security
        </button>
        <button className=" text-brown-green font-weight-semi p-text">
          Addresses
        </button>
        <button className=" text-brown-green font-weight-semi p-text">
          Data privacy
        </button>
      </div>


      <div className="__profile-display-section ">
        <div className="__profile-display-card-container">
          <h1 className=" p-text font-weight-semi text-greenish">
            Personal Information
          </h1>
          <div className="__profile-display-card-sub-container">
            <div className="__profile-display-card display-f">
              <User />
              <div className="__profile-display-card-details">
                <div className="__first-name">
                  <p className=" normal-font-text text-greenish">First name</p>
                  <p className=" small-text font-weight-medium text-green">
                    Michael
                  </p>
                </div>
                <div className="__last-name">
                  <p className=" normal-font-text text-greenish">Last name</p>
                  <p className=" small-text font-weight-medium text-green">
                    Alakija
                  </p>
                </div>
                <div className="__phone-number">
                  <p className=" normal-font-text text-greenish">
                    Mobile phone number
                  </p>
                  <p className=" small-text font-weight-medium text-green">
                    08038456723
                  </p>
                </div>
              </div>
            </div>
            <div className="__edit-container">
              <div className="__edit display-f justify-space-between align-center">
                <p className="small-text text-green">
                  Edit personal information
                </p>
                <AngleRight />
              </div>
            </div>
          </div>
        </div>
        <div className="__profile-display-card-container">
          <h1 className=" p-text font-weight-semi text-greenish">
            Email Address
          </h1>
          <div className="__profile-display-card-sub-container">
            <div className="__profile-display-card display-f">
              <Envelope />
              <div className="__profile-display-email-address">
                <p className="small-text text-greenish">
                  You use your email address to sign in to your Rhomboid.com
                  account
                </p>
                <p className=" normal-font-text font-weight-medium text-green">
                  michaelkija@yahoo.com
                </p>
              </div>
            </div>
            <div className="__edit-container">
              <div className="__edit display-f justify-space-between">
                <p className="small-text text-green">Edit email address</p>
                <AngleRight />
              </div>
            </div>
          </div>
        </div>
        <div className="__profile-display-card-container">
          <h1 className=" p-text font-weight-semi text-greenish">
            Primary Address
          </h1>
          <div className="__profile-display-card-sub-container">
            <div className="__profile-display-card display-f">
              <Location />
              <div className="__profile-display-primary-address">
                <p className="small-text text-greenish">
                  You have no saved addresses
                </p>
              </div>
            </div>
            <div className="__edit-container">
              <div className="__edit display-f justify-space-between">
                <p className="small-text text-green">Add a primary address</p>
                <AngleRight />
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Profile;
