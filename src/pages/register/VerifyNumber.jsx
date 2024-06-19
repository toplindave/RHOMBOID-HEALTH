import React from "react";
import "./register.css";
import "./register-media.css";

import Doctor from "./doctor.jpg";

function VerifyNumber({ nextStep }) {
	return (
		<div className="register">
			<div className="register-container">
				<div className="register-container-left">
					<div className="circle-container">
						<div className="circle">
							<img src={Doctor} alt="doctor" className="cicle-img" />
						</div>
					</div>
					<div className="circle-text">
						<p></p>
					</div>
				</div>
				<div className="register-container-right">
					<div className="index-num"></div>
					<h2 className="register-container-right-sub-header">
						Verify Phone Number
					</h2>
					<p className="register-container-right-text">
						Please confirm the phone number below belongs to you. We will send
						you a One Time Password (OTP) to fill.
					</p>

					<form className="verf-form" action="">
						<div>
							<input type="text" name="" id="verifyNumb" placeholder="change" />
						</div>
						<div className="verif-con">
							<button className="send-code-btn" onClick={nextStep}>
								Send Code
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default VerifyNumber;
