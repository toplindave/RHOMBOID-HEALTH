import "./App.css";
// import Body from "./component/body/Body";
import Nav from "./component/nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "./component/sign-in/Sign-in";
import Register from "./pages/register/Register";
import Free from "./pages/free/Free";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav />
				<Routes>
					{/* <Body /> */}
					<Route path="/account/sign-in" element={<Sign />} />
					<Route path="/account/register" element={<Register />} />
					<Route path="/free" element={<Free />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
