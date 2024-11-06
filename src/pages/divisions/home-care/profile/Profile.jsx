import React, { useState } from "react";
import "../../../../styles/index.scss";

import PersonalInfoTab from "../../../../component/divisions/home-care/profile-tabs/personal-information/PersonalInfoTab";
import WalletTab from "../../../../component/divisions/home-care/profile-tabs/wallet/WalletTab";
import SecurityTab from "../../../../component/divisions/home-care/profile-tabs/security/SecurityTab";
import AddressesTab from "../../../../component/divisions/home-care/profile-tabs/addresses/AddressesTab";
import PrivacyTab from "../../../../component/divisions/home-care/profile-tabs/privacy/PrivacyTab";

function Profile() {



  const [btnState, setBtnState] = useState(1);

  const setBtnClass = (index) => {
    if (btnState === index) {
      return "active-tab";
    }
    else if (btnState === index) {

      return "active-tab";

    } else if (btnState === index) {
      return "active-tab";


    } else if (btnState === index) {
      return "active-tab";


    } else if (btnState === index) {
      return "active-tab";

    }
    else {
      return ""
    }

  }

  const toggleBtn = (index) => {
    setBtnState(index)
  }



  return (
    <div className="__caregiver-profile">
      <h1 className=" font-weight-semi text-greenish sub-title-text">
        Account
      </h1>

      <div className="__profile-btn-section display-f justify-space-between align-center">

        <div
          onClick={() => toggleBtn(1)}
          className={`profile-btns text-brown-green font-weight-semi p-text ${setBtnClass(1)}`}>
          Personal Information
        </div>
        <div 
          onClick={() => toggleBtn(2)}

        
        className={`profile-btns text-brown-green font-weight-semi p-text ${setBtnClass(2)}`}>
          Wallet
        </div>

        <div
          onClick={() => toggleBtn(3)}

        className={`profile-btns text-brown-green font-weight-semi p-text ${setBtnClass(3)}`}>
          Sign in & Security
        </div>

        <div 
          onClick={() => toggleBtn(4)}

        className={`profile-btns text-brown-green font-weight-semi p-text ${setBtnClass(4)}`}>
          Addresses
        </div>

        <div 
          onClick={() => toggleBtn(5)}

        className={`profile-btns text-brown-green font-weight-semi p-text ${setBtnClass(5)}`}>
          Data privacy
        </div>

      </div>




      <div className="__profile-display-section">
        <PersonalInfoTab 
          setBtnClass = {setBtnClass}
        />

        <WalletTab 
          setBtnClass = {setBtnClass}

        />

        <SecurityTab 
          setBtnClass = {setBtnClass}

        />

        <AddressesTab 
          setBtnClass = {setBtnClass}

        />

        <PrivacyTab
          setBtnClass = {setBtnClass}

        />



      </div>


    </div>
  );
}

export default Profile;
