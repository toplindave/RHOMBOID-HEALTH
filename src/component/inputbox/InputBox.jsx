import React from "react";
import "../../styles/index.scss";

function InputBox(props) {
	return (
		<div className="inputBox">
			<input
				type={props.type}
				required
				style={{
					border: props.isError && "1px solid #B20000",
				}}
				value={props.value}
				onChange={props.handleInput}
			/>
			<span>{props.span}</span>
		</div>
	);
}

export default InputBox;
