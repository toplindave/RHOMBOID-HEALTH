import { Link } from "react-router-dom";
import { ReactComponent as ArrownDown } from "../../../component/globals/icons/arrowDown.svg";
import "./nav.css";
// import logo from '../../globals/images/rh-logo2.png';
import { ReactComponent as Logo } from "../../../component/globals/images/logo.svg";

const MainNav = () => {
  return (
    <div className=" __navigation container display-f justify-space-between pt-2 pb-2 bg-normalwhite">
   
        <div className="logo text-success">
          <Link to="/">
           <Logo />
          </Link>
        </div>
        <ul className="text-normalblack display-f justify-space-between align-center font-weight-semi">
          <li className="ml-4">
            <Link to="/rhomboid/home-care">Home Care</Link>
          </li>
          <li className="ml-4">
            <Link to="">Referral</Link>
          </li>
          <li className="display-f justify-space-between align-center ml-4">
            About <ArrownDown />
          </li>
        </ul>
    </div>
  );
};

export default MainNav;
