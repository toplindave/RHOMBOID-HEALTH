import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavProvider } from "./context/NavContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<NavProvider>
			<App />
		</NavProvider>

	</React.StrictMode>
);
