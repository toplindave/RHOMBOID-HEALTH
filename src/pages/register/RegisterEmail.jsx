import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { ReactComponent as Apple } from "../../component/sign-in/login/apple.svg";
import { ReactComponent as Facebook } from "../../component/sign-in/login/facebook.svg";
import { ReactComponent as Google } from "../../component/sign-in/login/google.svg";

function RegisterEmail({ nextStep }) {
	return (
		<div className="register">
			<div className="register-container">
				<div className="register-container-left">
					<div className="circle-container">
						<div className="circle"></div>
					</div>
					<div className="circle-text">
						<p>
							Get answers to your medical questions from the comfort of your own
							home
						</p>
					</div>
				</div>
				<div className="register-container-right">
					<div className="index-num">1/3</div>
					<h2>Create your account</h2>
					<p>Let's check with your email</p>

					<form action="">
						<input type="email" name="" id="" placeholder="Email address *" />
						<div className="email-register-button">
							<button
								onClick={nextStep}
								style={{
									cursor: "pointer",
								}}>
								Next
							</button>
						</div>
					</form>
					<div className="alternative-login">
						<p>Or create account with</p>
						<div className="alternative-login-icon">
							<div className="alternative-login-icon-div">
								<Link>
									<Facebook />
								</Link>
								<Link>
									<Google />
								</Link>
								<Link>
									<Apple />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RegisterEmail;
