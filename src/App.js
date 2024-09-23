import "./App.css";
import HomeCare from "./pages/company/homeCare/HomeCare";
// import Body from "./component/body/Body";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Sign from "./component/sign-in/Sign-in";
// import Register from "./pages/company/account/register/Register";
<<<<<<< HEAD
// import LandingPage from "./pages/company/landing/LandingPage";
// import Layout from "./layouts/Layout";
// import CompanyLayout from "./layouts/CompanyLayout";
=======
import LandingPage from "./pages/company/landing/LandingPage";
import Layout from "./layouts/Layout";
import CompanyLayout from "./layouts/CompanyLayout";
import HomeCareLayout from "./layouts/HomeCareLayout";
import Home from "./pages/divisions/home-care/home/Home";
>>>>>>> 9c9b129628b11b4cc346cb639ea23a61a197ae3d

function App() {
  return (
    <div className="App">
      <HomeCare />
      {/* <LandingPage /> */}
      {/* <Free /> */}
      {/* <BrowserRouter> */}
      {/* <Routes> */}
      {/* <Body /> */}

<<<<<<< HEAD
      {/* <Route element={ <Layout /> }>  */}
=======
          <Route element={<Layout />}>
>>>>>>> 9c9b129628b11b4cc346cb639ea23a61a197ae3d

      {/* company routes */}

<<<<<<< HEAD
      {/* <Route element={ <CompanyLayout />}> */}
=======
            <Route element={<CompanyLayout />}>
>>>>>>> 9c9b129628b11b4cc346cb639ea23a61a197ae3d

      {/* <Route path="/" element={<LandingPage />} /> */}
      {/* <Route path="/account/sign-in" element={<Sign />} />
              <Route path="/account/register" element={<Register />} /> */}

      {/* </Route> */}

<<<<<<< HEAD
      {/* </Route> */}

      {/* </Routes> */}
      {/* </BrowserRouter> */}
=======

            {/* home care routes */}

            <Route path="/rhomboid/home-care" element={<HomeCareLayout />}>

              <Route index element={<Home/>} />
              {/* <Route path="products" element={<Products />} /> */}



            </Route>
          </Route>


        </Routes>
      </BrowserRouter>
>>>>>>> 9c9b129628b11b4cc346cb639ea23a61a197ae3d
    </div>
  );
}

export default App;
