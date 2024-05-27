import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

function RegisterAddress({ nextStep, prevStep }) {
	return (
		<div className="register">
			<div className="register-container">
				<div className="register-container-left">
					<div className="circle-container">
						<div className="circle"></div>
					</div>
					<div className="circle-text">
						<p>Find nearby Hospitals, Clinics or Labs with ease</p>
					</div>
				</div>
				<div className="register-container-right">
					<div className="index-num">3/3</div>
					<h2>Create your account</h2>
					<p>Tell us about yourself</p>

					<form action="">
						<div className="country-selection">
							<input
								type="text"
								name=""
								id="country-input"
								placeholder="Country *"
							/>
							<input
								type="text"
								name=""
								id="state-input"
								placeholder="State *"
							/>
						</div>

						<input type="text" placeholder="City *" id="add-ress" />

						<input type="text" placeholder="Address" id="add-ress" />

						<Link className="terms">
							By clicking "Submit",
							<span> I agree to Terms and Conditions*</span>
						</Link>

						<div className="name-register-button reg-add">
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									width: "40%",
								}}>
								<button className="prev-btn prevv" onClick={prevStep}>
									Previous
								</button>
								<button className="next-btn sub-btn" onClick={nextStep}>
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default RegisterAddress;
