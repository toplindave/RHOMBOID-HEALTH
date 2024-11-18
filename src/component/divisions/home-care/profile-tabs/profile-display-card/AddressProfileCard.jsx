import { ReactComponent as Location } from "../../../../../component/globals/icons/location-dot-regular.svg";
import { ReactComponent as AngleRight } from "../../../../../component/globals/icons/angleRightLight.svg";
import '../../../../../'
import { useState } from "react";
import Modal from "../../../../globals/modals/Modal";

const AddressProfileCard = (props) => {

    const { address, action } = props;

    const [openDesc, setOpenDesc] = useState(false);


    const handleDescClick = () => {
        setOpenDesc(false);
    }



    return (

        <>
            {
                openDesc &&
                <Modal
                    modalBody={<span>{address.description}</span>}
                    modalType=""
                    closeModal={handleDescClick}

                />
            }


            <div className="profile-display-card-container">

                <div className="profile-display-card-sub-container">

                    <div className="profile-display-card display-f">
                        <Location />
                        <div className="profile-display-card-details">
                            <div className="lbl">
                                <p className="lbl-1 p-text text-greenish">Street:</p>
                                <p className="lbl-2 p-text font-weight-medium text-green">
                                    {address.street}
                                </p>
                            </div>
                            <div className="lbl">
                                <p className="lbl-1 p-text text-greenish">City:</p>
                                <p className="lbl-2 p-text font-weight-medium text-green">
                                    {address.city}

                                </p>
                            </div>
                            <div className="lbl">
                                <p className="lbl-1 p-text text-greenish">
                                    State:
                                </p>
                                <p className="lbl-2 p-text font-weight-medium text-green">
                                    {address.state}

                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="edit-container">
                        <div className="adr-desc"
                            onClick={() => setOpenDesc(true)}
                        >
                            Additional description
                        </div>

                        <div
                            className="edit display-f justify-space-between align-center"
                            onClick={action}

                        >
                            <p className="normal-font-text font-weight-medium text-green mr-1">
                                Edit address
                            </p>
                            <AngleRight />
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}

export default AddressProfileCard