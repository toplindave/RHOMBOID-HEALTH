import "../../../../../styles/index.scss";
import { ReactComponent as User } from "../../../../../component/globals/icons/userLight.svg";
import { ReactComponent as Envelope } from "../../../../../component/globals/icons/envelope-sharp-light.svg";
import { ReactComponent as Location } from "../../../../../component/globals/icons/locationDotRegular.svg";
import { ReactComponent as AngleRight } from "../../../../../component/globals/icons/angleRightLight.svg";
import EditPersonalInfo from "../../../../globals/modals/EditPersonalInfo";
import { useState } from "react";
import Modal from "../../../../globals/modals/Modal";
import EditEmail from "../../../../globals/modals/EditEmail";
import ChangePasswordModal from "../../../../globals/modals/ChangePasswordModal";
import CreateAddressModal from "../../../../globals/modals/CreateAddressModal";





const PersonalInfoTab = (props) => {


    const { setBtnClass } = props;


    const [openInfo, setOpenInfo] = useState(false);
    const [openAdr, setOpenAdr] = useState(false);
    const [openEmail, setOpenEmail] = useState(false);

    const handleInfoClick = () => {
        setOpenInfo(false);
    }


    const handleAdrClick = () => {
        setOpenAdr(false);
    }


    const handleEmailClick = () => {
        setOpenEmail(false);
    }




    return (

        <>
            {
                openInfo &&
                <Modal
                    modalBody={<EditPersonalInfo closeModal={handleInfoClick} />}
                    modalType="form"
                    closeModal={handleInfoClick}

                />
            }

            {
                openEmail &&
                <Modal
                    modalBody={<EditEmail closeModal={handleEmailClick} />}
                    modalType="form"
                    closeModal={handleEmailClick}

                />
            }

            {
                openAdr &&
                <Modal
                    modalBody={<CreateAddressModal closeModal={handleAdrClick} />}
                    modalType="form"
                    closeModal={handleAdrClick}

                />
            }

            <div className={`info-display-section-1 ${setBtnClass(1)}`}>

                <div className="__profile-display-card-container">
                    <h1 className="h3-text font-weight-semi text-greenish">
                        Personal Information
                    </h1>
                    <div className="__profile-display-card-sub-container">
                        <div className="__profile-display-card display-f">
                            <User />
                            <div className="__profile-display-card-details">
                                <div className="__first-name">
                                    <p className="p-text text-greenish">First name</p>
                                    <p className="p-text font-weight-medium text-green">
                                        Michael
                                    </p>
                                </div>
                                <div className="__last-name">
                                    <p className="p-text text-greenish">Last name</p>
                                    <p className="p-text font-weight-medium text-green">
                                        Alakija
                                    </p>
                                </div>
                                <div className="__phone-number">
                                    <p className="p-text text-greenish">
                                        Mobile phone number
                                    </p>
                                    <p className="p-text font-weight-medium text-green">
                                        08038456723
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="__edit-container">
                            <div
                                className="__edit display-f justify-space-between align-center"
                                onClick={() => setOpenInfo(true)}

                            >
                                <p className="normal-font-text font-weight-medium text-green mr-1">
                                    Edit personal information
                                </p>
                                <AngleRight />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="__profile-display-card-container">
                    <h1 className="h3-text font-weight-semi text-greenish">
                        Email Address
                    </h1>
                    <div className="__profile-display-card-sub-container">
                        <div className="__profile-display-card display-f">
                            <Envelope />
                            <div className="__profile-display-email-address">
                                <p className="p-text text-greenish">
                                    You use your email address to sign in to your Rhomboid.com
                                    account
                                </p>
                                <p className="p-text font-weight-medium text-green">
                                    michaelkija@yahoo.com
                                </p>
                            </div>
                        </div>
                        <div className="__edit-container">
                            <div
                                className="__edit display-f align-center"
                                onClick={() => setOpenEmail(true)}

                            >
                                <p className="normal-font-text font-weight-medium text-green mr-1">Edit email address</p>
                                <AngleRight />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="__profile-display-card-container">
                    <h1 className="h3-text font-weight-semi text-greenish">
                        Primary Address
                    </h1>
                    <div className="__profile-display-card-sub-container">
                        <div className="__profile-display-card display-f">
                            <Location />
                            <div className="__profile-display-primary-address">
                                <p className="p-text text-greenish">
                                    You have no saved addresses
                                </p>
                            </div>
                        </div>
                        <div className="__edit-container">
                            <div
                                className="__edit display-f justify-space-between align-center"
                                onClick={() => setOpenAdr(true)}
                            >
                                <p className="normal-font-text font-weight-medium text-green mr-1">Add a primary address</p>
                                <AngleRight />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default PersonalInfoTab;