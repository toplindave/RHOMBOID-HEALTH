import { Link } from "react-router-dom";
import { ReactComponent as ArrownDown } from "../../../component/globals/icons/arrowDown.svg";
import "./nav.css";
// import logo from '../../globals/images/rh-logo2.png';
import { ReactComponent as Logo } from "../../../component/globals/images/logo.svg";
import MainNavDropDown from "./MainNavDropDown";
import { useState, useEffect, useRef } from "react";

const MainNav = () => {

  const [openNav, setOpenNav] = useState(false);



  const linkRef = useRef();


  useEffect(() => {
    function handleClickOutside(e){

      if(openNav && (e.target.toString() !== linkRef.current.toString())){
        setOpenNav(false);
      }
      
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);

    }


  }, [openNav]);


  const handleDropdown = () => {
   
    if(openNav){
      setOpenNav(false);
    }else{
      setOpenNav(true);

    }
  

  }





  return (
    <div className=" __navigation container display-f justify-space-between pt-2 pb-2 bg-normalwhite">

      <div className="logo text-success">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <ul className="text-normalblack display-f justify-space-between align-center font-weight-semi">

        <Link to="/rhomboid/home-care" className="ml-4 font-md text-normalblack">Home Care</Link>

        <Link to="" className="ml-4 font-md text-normalblack">Referral</Link>

        <div className="m-about-link">
          <span
            className="font-md display-f justify-space-between align-center ml-4 text-greenish"
            onClick={handleDropdown}
            ref={linkRef}
          >
            About <ArrownDown />


          </span>
          <MainNavDropDown openNav={openNav} />
        </div>
      </ul>
    </div>
  );
};

export default MainNav;
