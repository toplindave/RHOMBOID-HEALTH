import React from "react";
import "./register.css";

function VerifyNumber({ nextStep }) {
	return (
		<div className="register">
			<div className="register-container">
				<div className="register-container-left">
					<div className="circle-container">
						<div className="circle"></div>
					</div>
					<div className="circle-text">
						<p></p>
					</div>
				</div>
				<div className="register-container-right">
					<div className="index-num"></div>
					<h2>Verify Phone Number</h2>
					<p>
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
