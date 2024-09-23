import "./App.css";
// import Body from "./component/body/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Sign from "./component/sign-in/Sign-in";
// import Register from "./pages/company/account/register/Register";
import LandingPage from "./pages/company/landing/LandingPage";
import Layout from "./layouts/Layout";
import CompanyLayout from "./layouts/CompanyLayout";
import HomeCareLayout from "./layouts/HomeCareLayout";
import Home from "./pages/divisions/home-care/home/Home";

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      {/* <Free /> */}
      <BrowserRouter>
        <Routes>
          {/* <Body /> */}

          <Route element={<Layout />}>

            {/* company routes */}

            <Route element={<CompanyLayout />}>

              <Route path="/" element={<LandingPage />} />
              {/* <Route path="/account/sign-in" element={<Sign />} />
              <Route path="/account/register" element={<Register />} /> */}

            </Route>


            {/* home care routes */}

            <Route path="/rhomboid/home-care" element={<HomeCareLayout />}>

              <Route index element={<Home/>} />
              {/* <Route path="products" element={<Products />} /> */}



            </Route>
          </Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
