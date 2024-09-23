import React from "react";
import "../../../styles/index.scss";
// import "./landingpage.scss";

import { ReactComponent as ListIcon } from "../../../component/globals/icons/listIcon.svg";
import { ReactComponent as Download } from "../../../component/globals/icons/downloadSharpSolid.svg";
import { ReactComponent as QRCode } from "../../../component/globals/icons/qrcodeSolid.svg";

// import { ReactComponent as ArrowRight } from "./icons/arrowRight.svg";
import AdultCare from "../../../component/globals/icons/adultcare.png";
import ChildrenCare from "../../../component/globals/icons/childrenCare.jpg";
import ButtonWithText from "../../../component/globals/buttons/buttonWithText/ButtonWithText";
// import TopNav from "../../../component/company/nav/TopNav";
// import MainNav from "../../../component/company/nav/MainNav";

function LandingPage() {
  return (
    <div>
      {/* <TopNav />


      <MainNav /> */}

      <section className="__section1">
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
        <p className=" p-text font-weight-medium">
          We can provide care for a little as 8 hours up to 24 hours!
        </p>
        <div className="__home-care-card-container display-f justify-space-between">
          <div className="_home-care-card">
            <div className="__home-care-card-img">
              <img src={AdultCare} alt="adult care" />
            </div>
            <h3 className="h3-text">Adult care</h3>
            <p className="p-text letter-spacing-32">
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
            <p className="p-text letter-spacing-32">
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
        <h1 className="sub-title-text font-weight-semi">
          When to seek for a home care
        </h1>
        <h4 className="h3-text font-weight-semi">
          Choosing home care doesn't have to be overwhelming with our
          fully-trained, private carers by your side.
        </h4>
        <h3 className="h3-text font-weight-semi">Our aim:</h3>
        <p className="p-text">You may consider seeking home care,</p>
        <ul>
          <li>
            <ListIcon />
            <p className="p-text letter-spacing-24">
              You or a loved one needs personalized assistance that is not
              easily provided by family members or public services.
            </p>
          </li>
          <li>
            <ListIcon />
            <p className="p-text letter-spacing-24">
              To provide personalized support and assistance to individuals in
              the comfort of their own homes, helping them maintain their
              independence, dignity, and quality of life.
            </p>
          </li>
          <li>
            <ListIcon />
            <p className="p-text letter-spacing-24">
              {" "}
              if specialized care is needed, such as dementia care,
              post-surgical recovery.
            </p>
          </li>
          <li>
            <ListIcon />
            <p className="p-text letter-spacing-24">
              To meet the unique needs of each person, whether through help with
              daily activities, medical care, rehabilitation, or emotional
              support.
            </p>
          </li>
          <li>
            <ListIcon />
            <p className="p-text letter-spacing-24">
              if there are concerns about safety, mobility, or the ability to
              live independently, a private carer can provide the necessary
              supervision and support to enhance quality of life and ensure
              peace of mind.
            </p>
          </li>
          <li>
            <ListIcon />
            <p className="p-text letter-spacing-24">
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
              <p className="normal-font-text font-weight-medium">For Desktop</p>
              <Download />
              <p className="normal-font-text font-weight-medium">
                Download the Rhomboid app
              </p>
            </div>
          </button>
          <button className="__downlod-btn">
            <div className="__download-content">
              <p className="normal-font-text font-weight-medium">
                For Mobile devices
              </p>
              <QRCode />
              <p className="normal-font-text font-weight-medium">
                Scan to download the Rhomboid app on your mobile device
              </p>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
