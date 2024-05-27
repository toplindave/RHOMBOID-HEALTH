import React from "react";
import "./register.css";

function VerifyCode({ nextStep }) {
	return (
		<div className="register">
			<div className="register-container">
				<div className="register-container-left">
					<div className="circle-container">
						<div className="circle"></div>
					</div>
					<div className="circle-text">
						<p>Welcome to Rhomboid Health</p>
					</div>
				</div>
				<div className="register-container-right">
					<div className="index-num"></div>
					<h2>Verify Phone Number</h2>
					<p>We've sent a security code to +2348035765411</p>

					<h4 className="veri-h4">Enter your code below to continue</h4>

					<form className="verf-code" action="">
						<div>
							<input
								type="text"
								name=""
								id="verifyCodee"
								placeholder="Enter the code"
							/>
						</div>
						<div className="verif-code">
							<button className="confirm-code-btn" onClick={nextStep}>
								Verify
							</button>
						</div>
						<h4 className="code-not-recieved">Didn't receive the code?</h4>
						<h4 className="resend-code">Resend code</h4>
					</form>
				</div>
			</div>
		</div>
	);
}

export default VerifyCode;
