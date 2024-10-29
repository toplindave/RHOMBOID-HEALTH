import React from "react";
import "../../../../styles/index.scss";

function SignIn() {
  return (
    <div className="__sign-in-section-web display-f justify-center align-center">
      <div className="__sign-in-container-web">
        <div className="__sign-In-sub-container-web">
          <h2 className=" sub-title-text font-weight-medium text-black-green">
            Sign In
          </h2>
          <form action="" className="__sign-in-form-web">
            <p className="font-weight-medium text-black-green normal-font-text">
              Email:
            </p>
            <input type="email" />
            <p className="font-weight-medium text-black-green normal-font-text">
              Password:
            </p>
            <input type="password" />
            <button className=" text-normalwhite bg-brown-green p-text">
              Sign In
            </button>
          </form>
        </div>
        <div className="__sign-in-sign-up-container display-f justify-center">
          <button className=" text-normalwhite p-text bg-black-5">
            Create account
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
