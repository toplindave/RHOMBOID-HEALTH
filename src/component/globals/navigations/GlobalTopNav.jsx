import "../../../styles/index.scss";
import "./global-top-nav.css";
import { ReactComponent as Logo } from "../../globals/images/logo.svg";
import { ReactComponent as House } from "../../globals/icons/house-sharp-solid.svg";
import { ReactComponent as AngleLeft } from "../../globals/icons/angleLeftLight.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";





const GlobalTopNav = () => {

  const location = useLocation();
  const navigate = useNavigate();


  const [showNavBtns, setShowNavBtns] = useState(false);

  useEffect(() => {
    const showBtns = () => {
      if (location.pathname.includes("home-care/")) {
        setShowNavBtns(true);
      } else {
        setShowNavBtns(false);

      }
    }

    showBtns();

  }, [location]);



  const showAppName = () => {

    if (location.pathname.includes("home-care")) {
      return "Home care"
    }
    if (location.pathname.includes("pharma")) {
      return "Pharma"
    }

  }





  return (
    <div className="__care-logo">

      {
        showNavBtns ?
          <div className="_care-logo-btns container-care display-f justify-space-between align-center">
            <Link to="/rhomboid/home-care" className="home-btn bg-ash font-norm font-weight-medium justify-space-between align-center"

            >
              <House />
              {showAppName()}
            </Link>

            <Link to="/">
              <Logo />
            </Link>

            <div
              className="home-btn bg-ash font-norm font-weight-medium justify-space-between align-center"
              onClick={() => navigate(-1)}
            >
              <AngleLeft />
              Back
            </div>


          </div>
          :
          <Link to="/">
            <Logo />
          </Link>

      }

    </div>
  )
}

export default GlobalTopNav;