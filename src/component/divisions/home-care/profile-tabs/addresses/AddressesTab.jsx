import "../../../../../styles/index.scss";
import { ReactComponent as Location } from "../../../../../component/globals/icons/location-dot-regular.svg";
import ProfileDisplayCard from "../profile-display-card/ProfileDisplayCard";
import { addresses } from "../../../../../utils/addressData";
import AddressProfileCard from "../profile-display-card/AddressProfileCard";
import Modal from "../../../../globals/modals/Modal";
import CreateAddressModal from "../../../../globals/modals/CreateAddressModal";
import { useState } from "react";



const AddressesTab = (props) => {

  const { setBtnClass } = props;

  const [openAdr, setOpenAdr] = useState(false);

  const handleAdrClick = () => {
    setOpenAdr(false);
  }

  return (

    <>
      {
        openAdr &&
        <Modal
          modalBody={<CreateAddressModal closeModal={handleAdrClick} />}
          modalType="form"
          closeModal={handleAdrClick}

        />
      }


      <div className={`info-display-section-4 ${setBtnClass(4)}`}>

        <h3 className="h3-text font-weight-semi">Addresses</h3>

        <div className="address-elements display-f">

          {addresses.length === 0 ?

            <ProfileDisplayCard

              Icon={Location}
              title={null}
              desc="You have no saved address."
              text={null}
              btnText="Add an address"

            />

            :

            addresses.map((a, i) => (
              <AddressProfileCard
                address={a}
                key={i}
                action={() => setOpenAdr(true)}
              />
            ))


          }


        </div>
      </div>
    </>

  )
}

export default AddressesTab;