import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavProvider } from "./context/NavContext";
import { DataProvider } from "./context/DataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<DataProvider>
			<NavProvider>
				<App />
			</NavProvider>
		</DataProvider>

	</React.StrictMode>
);
