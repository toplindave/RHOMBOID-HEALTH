import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/company/landing/LandingPage";
import Layout from "./layouts/Layout";
import CompanyLayout from "./layouts/CompanyLayout";
import HomeCareLayout from "./layouts/HomeCareLayout";
import Home from "./pages/divisions/home-care/home/Home";
import AdultCare from "./pages/divisions/home-care/adult-care/AdultCare";
import ChildrenCare from "./pages/divisions/home-care/children-care/ChildrenCare";
import Caregivers from "./pages/divisions/home-care/caregivers/Caregivers";






function App() {


  




  return (
    <div className="App">

      <BrowserRouter>
        <Routes>


          <Route element={<Layout />}>

            {/* company routes */}

            <Route element={<CompanyLayout />}>

              <Route path="/" element={<LandingPage />} />


            </Route>

            {/* home care routes */}

            <Route path="/rhomboid/home-care" element={<HomeCareLayout />}>

              <Route index element={<Home />} />
              <Route path="adult-care" element={<AdultCare />} />
              <Route path="children-care" element={<ChildrenCare />} />
              <Route path="caregivers" element={<Caregivers />} />



            </Route>



          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
