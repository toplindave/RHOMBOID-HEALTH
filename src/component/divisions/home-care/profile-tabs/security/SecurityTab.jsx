import "../../../../../styles/index.scss";
import ProfileDisplayCard from "../profile-display-card/ProfileDisplayCard";
import { ReactComponent as Envelope } from "../../../../../component/globals/icons/envelope-sharp-light.svg";
import { ReactComponent as Lock } from "../../../../../component/globals/icons/lock-keyhole-sharp-light.svg";
import ChangePasswordModal from "../../../../globals/modals/ChangePasswordModal";
import Modal from "../../../../globals/modals/Modal";
import { useState } from "react";
import EditEmail from "../../../../globals/modals/EditEmail";




const SecurityTab = (props) => {

  const { setBtnClass } = props;

  const [openPass, setOpenPass] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);

  const handlePassClick = () => {
    setOpenPass(false);
  }


  const handleEmailClick = () => {
    setOpenEmail(false);
  }




  return (
    <>
      {
        openEmail &&
        <Modal
          modalBody={<EditEmail closeModal={handleEmailClick} />}
          modalType="form"
          closeModal={handleEmailClick}

        />
      }

      {
        openPass &&
        <Modal
          modalBody={<ChangePasswordModal closeModal={handlePassClick} />}
          modalType="form"
          closeModal={handlePassClick}

        />
      }

      <div className={`info-display-section-3 ${setBtnClass(3)}`}>

        <h3 className="h3-text font-weight-semi">Sign in & Security</h3>

        <div className="security-elements display-f">

          <ProfileDisplayCard
            Icon={Envelope}
            title="Email Address"
            desc="You use your email address to sign in to your Rhomboid.com account."
            text="michaelkija@yahoo.com"
            btnText="Edit email address"
            action={() => setOpenEmail(true)}


          />


          <ProfileDisplayCard
            Icon={Lock}
            title="Password"
            desc={null}
            text={new Array(9).join('*')}
            btnText="Change password"
            action={() => setOpenPass(true)}

          />


        </div>



      </div>

    </>

  )
}

export default SecurityTab;