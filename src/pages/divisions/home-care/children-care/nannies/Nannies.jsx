import React from "react";
import "../../../../../styles/index.scss";
import TopCareSection from "../../../../../component/globals/topcaresection/TopCareSection";
import CareInfoSection from "../../../../../component/globals/careinfosection/CareInfoSection";
import ChildrenCareImg from "../../../../../component/globals/icons/childrenCare.jpg";
// import BabySittingBenefits from "../../../../../data/babysitting-benefits/BabySittingBenefits";
// import { ReactComponent as Arrow } from "../../../../../component/globals/icons/arrowRightLongLight.svg";

const careH3 =
  "A nanny provides the additional support your family needs to help a busy week run more smoothly.";

const carePText =
  "Find a nanny who is perfectly suited to your family’s unique needs. With assistance from your local Jovie team, you can arrange a nanny on a schedule that aligns with your family and work life.";

const Nannies = () => {
  return (
    <div className="__care-section-1 ">
      <div className=" container-care">
        <TopCareSection
          btnText={"Find a nanny"}
          text={"Ikeja"}
          h1Text={"Nannies"}
        />
        <CareInfoSection
          careH3={careH3}
          carePText={carePText}
          CareImg={ChildrenCareImg}
        />

        <div className="__ways-to-support-container">
          <h3 className="__ways-to-support-h3 font-weight-semi sub-title-text text-greenish">
            Some of the ways a nanny can support you:
          </h3>
          <div className="__ways-to-support-sub-container">
            <div className="__ways-to-support-top display-f">
              <div className="__ways-to-support-card">
                <h3 className="big-p-text text-brown-green font-weight-semi">
                  Customized Care
                </h3>
                <p className="p-text text-greenish">
                  Nannies provide individualized care that is aligned with each
                  child’s needs, interests, and routines.
                </p>
              </div>
              <div className="__ways-to-support-card">
                <h3 className="big-p-text text-brown-green font-weight-semi">
                  Consistency and Stability
                </h3>
                <p className="p-text text-greenish">
                  Nannies can offer a sense of stability with a predictable
                  daily structure, essential for young children’s development.
                </p>
              </div>
            </div>
            <div className="__ways-to-support-middle display-f">
              <div className="__ways-to-support-card">
                <h3 className="big-p-text text-brown-green font-weight-semi">
                  In-Home Convenience
                </h3>
                <p className="p-text text-greenish">
                  Whether you work from home, in an office, or a combination of
                  both, your schedule is consistent and set. We’re here to help
                  you find a nanny who can provide the support you need, right
                  in your own home, exactly when you need it most.
                </p>
              </div>
            </div>
            <div className="__ways-to-support-bottom display-f">
              <div className="__ways-to-support-card">
                <h3 className="big-p-text text-brown-green font-weight-semi">
                  Family Support
                </h3>
                <p className="p-text text-greenish">
                  Nannies provide household support, allowing parents to focus
                  on their responsibilities while knowing their children are
                  safe and happy.
                </p>
              </div>
              <div className="__ways-to-support-card">
                <h3 className="big-p-text text-brown-green font-weight-semi">
                  Developmental and Educational Support
                </h3>
                <p className="p-text text-greenish">
                  Nannies often engage in structured activities that support
                  learning, social skills, and creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nannies;
