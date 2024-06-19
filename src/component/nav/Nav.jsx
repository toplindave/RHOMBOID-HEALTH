import React from "react";
import "./nav.css";

function Nav() {
	return (
		<div className="navigation">
			<div className="logo">
				<h1>RHOMBOID HEALTH</h1>
			</div>
			{/* <div className="nav-button-container"> */}
			<button className="nav-button">Request for Ambulance</button>
			{/* </div> */}
		</div>
	);
}

export default Nav;
