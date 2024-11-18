import React from "react";
import "../../../../styles/index.scss";
import TopCareSection from "../../../../component/globals/topcaresection/TopCareSection";
import CareInfoSection from "../../../../component/globals/careinfosection/CareInfoSection";
// import MoreEnquiry from "../../../../component/globals/more-enquiry/MoreEnquiry";
import AdultCareImg from "../../../../component/globals/icons/adultcare.png";

const careH3 =
  "Adult care provides dedicated support to meet both the mental and physical needs of older adults, often including respite care as well as long- or short-term assistance.";

const carePText =
  "Guided by our nursing specialists, elderly care provides tailored support for individuals who wish to remain in their own homes. This may include assistance with housekeeping, meal preparation, personal care, domiciliary services, mobility support, medication management, or simply offering companionship and help with outings.";
const AdultCare = () => {
  return (
    <div className="__care-section-1   ">
      <div className="adultt-care-top container-care">
        <TopCareSection
          btnText={"Find care"}
          text={"Ikeja"}
          h1Text={"Adult care"}
        />
        <CareInfoSection
          careH3={careH3}
          carePText={carePText}
          CareImg={AdultCareImg}
        />
        <div className="__ways-to-support-container">
          <h3 className="__ways-to-support-h3 font-weight-semi sub-title-text text-greenish">
            Some of the ways adult home care can support you:
          </h3>
          <div className="__ways-to-support-sub-container">
            <div className="__ways-to-support-top display-f">
              <div className="__ways-to-support-card">
                <h3 className="big-p-text text-brown-green font-weight-semi">
                  HouseKeeping
                </h3>
                <p className="p-text text-greenish">
                  An elderly care provider can assist with housekeeping tasks,
                  offering help with cleaning, laundry, and more
                </p>
              </div>
              <div className="__ways-to-support-card">
                <h3 className="big-p-text text-brown-green font-weight-semi">
                  Meal preparations
                </h3>
                <p className="p-text text-greenish">
                  Your carer can prepare meals, snacks, and drinks for you,
                  giving you the freedom to eat what you want, when you want.
                </p>
              </div>
            </div>
            <div className="__ways-to-support-middle display-f">
              <div className="__ways-to-support-card">
                <h3 className="big-p-text text-brown-green font-weight-semi">
                  Personal care
                </h3>
                <p className="p-text text-greenish">
                  A carer can provide gentle personal care, assisting with
                  bathing, dressing, toileting, or stoma management.
                </p>
              </div>
            </div>
            <div className="__ways-to-support-bottom display-f">
              <div className="__ways-to-support-card">
                <h3 className="big-p-text text-brown-green font-weight-semi">
                  Mobility support
                </h3>
                <p className="p-text text-greenish">
                  An elderly care provider can assist with housekeeping tasks,
                  offering help with cleaning, laundry, and more.
                </p>
              </div>
              <div className="__ways-to-support-card">
                <h3 className="big-p-text text-brown-green font-weight-semi">
                  Medication assistance
                </h3>
                <p className="p-text text-greenish">
                  Your carer can assist with medication needs, from picking it
                  up for you to helping with administration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <MoreEnquiry /> */}
    </div>
  );
};

export default AdultCare;
