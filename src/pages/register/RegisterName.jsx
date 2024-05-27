import React from "react";
import "./register.css";

function RegisterName({ nextStep, prevStep }) {
	return (
		<div className="register">
			<div className="register-container">
				<div className="register-container-left">
					<div className="circle-container">
						<div className="circle"></div>
					</div>
					<div className="circle-text">
						<p>
							Schedule your next appointment, or view details of your past and
							upcoming appointments
						</p>
					</div>
				</div>
				<div className="register-container-right">
					<div className="index-num">2/3</div>
					<h2>Create your account</h2>
					<p>Tell us about yourself</p>

					<form action="">
						<input
							type="text"
							name=""
							id="reg-input"
							placeholder="First name *"
							className="reg-input"
						/>
						<input
							type="text"
							name=""
							id="reg-input"
							placeholder="Last name *"
							className="reg-input"
						/>

						<div className="phone-num">
							<div className="country-code">
								<input type="text" placeholder="+234" id="code" />
							</div>
							<div className="number">
								<input type="text" placeholder="Phone number" id="code" />
							</div>
						</div>
						<div className="name-register-button">
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									width: "40%",
								}}>
								<button className="prev-btn" onClick={prevStep}>
									Previous
								</button>
								<button className="next-btn" onClick={nextStep}>
									Next
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default RegisterName;
