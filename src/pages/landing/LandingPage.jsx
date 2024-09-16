import React from "react";
import "../../styles/index.scss";
// import "./landingpage.scss";
import { Link } from "react-router-dom";
import { ReactComponent as User } from "./icons/user.svg";
import { ReactComponent as ArrownDown } from "./icons/arrowDown.svg";
import { ReactComponent as ListIcon } from "./icons/listIcon.svg";
import { ReactComponent as Download } from "./icons/downloadSharpSolid.svg";
import { ReactComponent as QRCode } from "./icons/qrcodeSolid.svg";
import { ReactComponent as FaceBookIcon } from "./icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "./icons/xIcon.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";
import { ReactComponent as YouTubeIcon } from "./icons/youtube.svg";
// import { ReactComponent as ArrowRight } from "./icons/arrowRight.svg";
import AdultCare from "./icons/adultcare.png";
import ChildrenCare from "./icons/childrenCare.jpg";
import ButtonWithText from "../../component/buttonWithText/ButtonWithText";

function LandingPage() {
  return (
    <div>
      <div className="container bg-blue display-f justify-space-between pt-1 pb-1 font-norm __hero align-center">
        <p className="text-normalwhite ">For Job seekers</p>

        <div className="text-normalwhite display-f justify-space-between __hero-inner align-center">
          <p>
            <Link to="">Search</Link>
          </p>
          <p>
            <Link to="">Language</Link>
          </p>
          <div className="__hero-account">
            <Link
              className=" display-f justify-space-between align-center"
              to="../account/sign-in"
            >
              <div className="__hero-account-svg">
                <User />
              </div>
              <p>Account</p>
            </Link>
          </div>
        </div>
      </div>
      <div className=" __navigation container display-f justify-space-between pt-2 pb-2 bg-normalwhite">
        <div className="logo text-success">
          <Link to="">
            <h1>logo</h1>
          </Link>
        </div>
        <ul className="text-normalblack display-f justify-space-between align-center ">
          <li>
            <Link to="">Home Care</Link>
          </li>
          <li>
            <Link to="">Referral</Link>
          </li>
          <li className=" display-f justify-space-between align-center">
            About <ArrownDown />
          </li>
        </ul>
      </div>
      <section className="__section1   ">
        <div className="__heroo  __overlay">
          <div className="section1-con container pt-9 ">
            <h1 className=" text-primary font-weight-semi big-text">
              Better care,
              <br />
              <span className="text-grey">
                cheaper rates,
                <br /> faster processes,
                <br /> better outcomes
              </span>
            </h1>
            <ButtonWithText text={"Get started"} />
          </div>
        </div>
      </section>
      <section className="__section2 container pt-4">
        <h1 className="title-text">Home care services</h1>
        <p className=" p-text">
          We can provide care for a little as 8 hours up to 24 hours!
        </p>
        <div className="__home-care-card-container display-f justify-space-between">
          <div className="_home-care-card">
            <div className="__home-care-card-img">
              <img src={AdultCare} alt="adult care" />
            </div>
            <h3 className="h3-text">Adult care</h3>
            <p className="p-text">
              We provide essential support to adults who need assistance with
              daily activities, medical care, or companionship, allowing them to
              live in the place where they are most comfortable, with
              personalized, one-on-one care, enhancing safety and independence
              and allowing for a continuum of care.
            </p>
            <ButtonWithText text={" Learn more"} />
          </div>
          <div className="_home-care-card">
            <div className="__home-care-card-img">
              <img src={ChildrenCare} alt="children care" />
            </div>
            <h3 className="h3-text">Children care</h3>
            <p className="p-text">
              We offer specialized in-home support for children with medical
              needs, chronic conditions, or disabilities, ensuring the child's
              development and overall well-being, allowing them to thrive at
              home while providing peace of mind to their families.
            </p>
            <ButtonWithText text={" Learn more"} />
          </div>
        </div>
      </section>
      <section className="__section3 container  pt-4  bg-white-3">
        <h1 className="sub-title-text">When to seek for a home care</h1>
        <h4 className="h3-text">
          Choosing home care doesn't have to be overwhelming with our
          fully-trained, private carers by your side.
        </h4>
        <h3 className="h3-text">Our aim:</h3>
        <p className="p-text">You may consider seeking home care,</p>
        <ul>
          <li>
            <ListIcon />
            <p className="p-text">
              You or a loved one needs personalized assistance that is not
              easily provided by family members or public services.
            </p>
          </li>
          <li>
            <ListIcon />
            <p className="p-text">
              To provide personalized support and assistance to individuals in
              the comfort of their own homes, helping them maintain their
              independence, dignity, and quality of life.
            </p>
          </li>
          <li>
            <ListIcon />
            <p className="p-text">
              {" "}
              if specialized care is needed, such as dementia care,
              post-surgical recovery.
            </p>
          </li>
          <li>
            <ListIcon />
            <p className="p-text">
              To meet the unique needs of each person, whether through help with
              daily activities, medical care, rehabilitation, or emotional
              support.
            </p>
          </li>
          <li>
            <ListIcon />
            <p className="p-text">
              if there are concerns about safety, mobility, or the ability to
              live independently, a private carer can provide the necessary
              supervision and support to enhance quality of life and ensure
              peace of mind.
            </p>
          </li>
          <li>
            <ListIcon />
            <p className="p-text">
              To prevent unnecessary hospitalizations or transitions to
              long-term care facilities by offering a safe and supportive
              environment.
            </p>
          </li>
        </ul>
      </section>
      <section className="__section4 container pt-4 bg-normalwhite">
        <h1 className="sub-title-text">Get the app and see how easy it gets</h1>
        <div className="__download-container display-f justify-space-between">
          <button className="__downlod-btn">
            <div className="__download-content">
              <p className="normal-font-text">For Desktop</p>
              <Download />
              <p className="normal-font-text">Download the Rhomboid app</p>
            </div>
          </button>
          <button className="__downlod-btn">
            <div className="__download-content">
              <p className="normal-font-text">For Mobile devices</p>
              <QRCode />
              <p className="normal-font-text">
                Scan to download the Rhomboid app on your mobile device
              </p>
            </div>
          </button>
        </div>
      </section>
      <footer className="__footer container pt-4 display-f justify-space-between bg-primary text-normalwhite">
        <div className="__footer-logo">
          <h1 className=" text-normalwhite title-text">Rhomboid</h1>
          <div className="__footer-social-container bg-black-4 ">
            <div className="__follow-us-con">
              <h4 className=" text-grey p-text">Follow Us</h4>
              <ul className=" display-f justify-space-between text-grey">
                <li>
                  <FaceBookIcon />
                </li>
                <li>
                  <TwitterIcon />
                </li>
                <li>
                  <LinkedInIcon />
                </li>
                <li>
                  <YouTubeIcon />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="__footer-nav-container display-f justify-space-between">
          <div className="__footer-nav">
            <h2 className="h3-text">Company</h2>
            <ul>
              <li className="normal-font-text">How Rhomboid works</li>
              <li className="normal-font-text">Membership</li>
              <li className="normal-font-text">About us</li>
              <li className="normal-font-text">FAQs</li>
            </ul>
          </div>
          <div className="__footer-nav">
            <h2 className="h3-text">Services</h2>
            <ul>
              <li className="normal-font-text">
                Medical Emergency Transportation
              </li>
              <li className="normal-font-text">Urgent care</li>
              <li className="normal-font-text">Primary care</li>
            </ul>
          </div>
          <div className="__footer-nav">
            <h2 className="h3-text">Contact</h2>
            <ul>
              <li className="normal-font-text">Contact us</li>
            </ul>
          </div>
          <div className="__footer-nav">
            <h2 className="h3-text">Preferences</h2>
            <ul>
              <li className="normal-font-text">Language</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
