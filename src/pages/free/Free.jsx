import React, { useState } from "react";
import "../../styles/index.scss";
import SearchBox from "../../component/seacrchbox/SearchBox";
import InputBox from "../../component/inputbox/InputBox";

function Free() {
	const [mailState, setMailState] = useState();
	const [mailVal, setMailVal] = useState("");
	function handleInput(e) {
		setMailVal(e.target.value);
		if (mailVal.includes("@")) {
			setMailState(false);
		} else {
			setMailState(true);
		}
	}
	return (
		<div>
			<h2>search box</h2>
			<SearchBox />
			<h2 className="text-success">buttons</h2>
			<div className="App display-f justify-space-around   pt-4 pb-4">
				<button className="btn">normal button</button>
				<button className="btn-primary">primary button</button>
				<button className="btn-secondary">secondary button</button>
				<button className="btn-tertiary">tertiary button</button>
				<button className="btn-cta">button call to action</button>
			</div>
			<h2 className="text-success mb-2">input form</h2>
			<div className="App   bg-black-1 pt-4 pb-4">
				<div className="contain display-f">
					<InputBox span={"First Name"} type={"text"} />
					<InputBox span={"Last Name"} type={"text"} />
					<InputBox
						span={"Email"}
						type={"text"}
						isError={mailState}
						value={mailVal}
						handleInput={handleInput}
					/>
					<InputBox span={"Age"} type={"number"} />
				</div>
			</div>
		</div>
	);
}

export default Free;
