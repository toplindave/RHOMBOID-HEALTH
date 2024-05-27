import React, { useState } from "react";
import "./register.css";
import RegisterEmail from "./RegisterEmail";
import RegisterName from "./RegisterName";
import RegisterAddress from "./RegisterAddress";
import VerifyNumber from "./VerifyNumber";
import VerifyCode from "./VerifyCode";
import Welcome from "./Welcome";

function Register() {
	const [formStep, setFormStep] = useState(0);
	const nextStep = (e) => {
		e.preventDefault();
		setFormStep((cur) => cur + 1);
	};
	const prevStep = (e) => {
		e.preventDefault();
		setFormStep((cur) => cur - 1);
	};
	return (
		<>
			{formStep === 0 && <RegisterEmail nextStep={nextStep} />}
			{formStep === 1 && (
				<RegisterName nextStep={nextStep} prevStep={prevStep} />
			)}
			{formStep === 2 && (
				<RegisterAddress nextStep={nextStep} prevStep={prevStep} />
			)}
			{formStep === 3 && <VerifyNumber nextStep={nextStep} />}
			{formStep === 4 && <VerifyCode nextStep={nextStep} />}
			{formStep === 5 && <Welcome />}
		</>
	);
}

export default Register;
