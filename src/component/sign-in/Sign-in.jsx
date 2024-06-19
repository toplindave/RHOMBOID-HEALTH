import React from "react";
import "./signin.css";
import "./signin-media.css";
import signinDetails from "../../data/sign-in-data/SignData";
import Login from "./login/Login";

function Sign() {
	return (
		<div className="sign-in">
			<div className="signin-details-container">
				<div className="signin-details">
					{signinDetails.map((details, key) => (
						<div className="card" key={details.id}>
							<div className="details-card-icon">{details.img}</div>
							<div className="details-card-texts">
								<h2> {details.title} </h2>
								<p> {details.text} </p>
							</div>
						</div>
					))}
				</div>
				<div className="login-container">
					<Login />
				</div>
			</div>
		</div>
	);
}

export default Sign;
