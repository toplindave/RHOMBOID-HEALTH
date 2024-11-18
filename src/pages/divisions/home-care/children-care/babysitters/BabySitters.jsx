import React from "react";
import "../../../../../styles/index.scss";
import TopCareSection from "../../../../../component/globals/topcaresection/TopCareSection";
import CareInfoSection from "../../../../../component/globals/careinfosection/CareInfoSection";
import ChildrenCareImg from "../../../../../component/globals/icons/childrenCare.jpg";
import BabySittingBenefits from "../../../../../data/babysitting-benefits/BabySittingBenefits";
import { ReactComponent as Arrow } from "../../../../../component/globals/icons/arrowRightLongLight.svg";

const careH3 =
  "Babysitting services offer short-term, flexible childcare solutions for families who need occasional or part-time assistance.";

const carePText =
  "We do the work of finding in-home babysitters. We screen and train babysitters who have amazing skills and love the work they do. Let our babysitters care for your children while you take care of the rest of your life, leaving you with more time and energy for togetherness, fun, and joy.";

const BabySitters = () => {
  return (
    <div className="__care-section-1 ">
      <div className=" container-care">
        <TopCareSection
          btnText={"Find a babysitter"}
          text={"Ikeja"}
          h1Text={"Babysitting"}
        />
        <CareInfoSection
          careH3={careH3}
          carePText={carePText}
          CareImg={ChildrenCareImg}
        />
      </div>
      <div className="__baby-sitting-benefit ">
        <h1 className="__baby-sitting-benefit-h1 text-24 text-normalwhite font-weight-semi">
          Babysitting services we offer
        </h1>
        <div className="__babysitting-benefit-grid-container">
          {BabySittingBenefits.map((benefit) => (
            <div className="__babysitting-benefit-grid-card" key={benefit.id}>
              <div className="__babysitting-benefit-grid-top">
                <h2 className="big-p-text font-weight-medium text-normalwhite">
                  {benefit.heading}
                </h2>
              </div>
              <div className="__babysitting-benefit-grid-middle">
                <p className=" p-text text-black-5">{benefit.text}</p>
              </div>
              <div className="__babysitting-benefit-grid-end">
                <button className="__babysitting-benefit-grid-circle">
                  <Arrow />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="__ways-babysitting-can-benefit-section">
        <h1 className="__ways-babysitting-can-benefit-h1 text-24 font-weight-semi text-greenish">
          Some of the ways a babysitter can benefit you:
        </h1>
        <div className="__ways-babysitting-can-benefit-grid-container">
          <div className="__ways-babysitting-can-benefit-grid-card">
            <h2 className=" big-p-text font-weight-semi text-brown-green">
              Flexible Scheduling
            </h2>
            <p className=" p-text text-greenish">
              Babysitters are available when families need them, whether during
              a busy afternoon or an evening out.
            </p>
          </div>
          <div className="__ways-babysitting-can-benefit-grid-card">
            <h2 className=" big-p-text font-weight-semi text-brown-green">
              Immediate Support
            </h2>
            <p className=" p-text text-greenish">
              Babysitters provide reliable, short-term care, helping families in
              unexpected situations or during emergencies.
            </p>
          </div>
          <div className="__ways-babysitting-can-benefit-grid-card">
            <h2 className=" big-p-text font-weight-semi text-brown-green">
              Personalized Attention
            </h2>
            <p className=" p-text text-greenish">
              In-home babysitting allows children to stay in a familiar
              environment, where they can follow regular routines.
            </p>
          </div>
          <div className="__ways-babysitting-can-benefit-grid-card">
            <h2 className=" big-p-text font-weight-semi text-brown-green">
              Developmental and Educational Support:
            </h2>
            <p className=" p-text text-greenish">
              Many babysitters are trained in early childhood education and know
              how to engage children with age-appropriate activities that
              encourage social, cognitive, and physical development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabySitters;
