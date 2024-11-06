import "../../../../../styles/index.scss";
import { ReactComponent as Location } from "../../../../../component/globals/icons/location-dot-regular.svg";
import ProfileDisplayCard from "../profile-display-card/ProfileDisplayCard";





const AddressesTab = (props) => {

  const { setBtnClass } = props;

  return (
    <div className={`info-display-section-4 ${setBtnClass(4)}`}>

      <h3 className="h3-text font-weight-semi">Addresses</h3>

      <div className="address-elements display-f">

        <ProfileDisplayCard

          Icon={Location}
          title={null}
          desc="You have no saved address."
          text={null}
          btnText="Add an address"

        />



      </div>
    </div>
  )
}

export default AddressesTab;