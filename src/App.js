import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/company/landing/LandingPage";
import Layout from "./layouts/Layout";
import CompanyLayout from "./layouts/CompanyLayout";
import HomeCareLayout from "./layouts/HomeCareLayout";
import Home from "./pages/divisions/home-care/home/Home";
import AdultCare from "./pages/divisions/home-care/adult-care/AdultCare";
// import ChildrenCare from "./pages/divisions/home-care/children-care/ChildrenCare";
import Caregivers from "./pages/divisions/home-care/caregivers/Caregivers";
import CaregiverDetails from "./component/divisions/home-care/caregiver-details/CaregiverDetails";
import Profile from "./pages/divisions/home-care/profile/Profile";
import SignIn from "./component/divisions/home-care/sign-in/SignIn";
import Referrals from "./pages/company/referrals/Referrals";
import AboutUs from "./pages/company/about/AboutUs";
import Offerings from "./pages/company/offerings/Offerings";
import HowRhomboidWorks from "./pages/company/rhomboid-work/HowRhomboidWorks";
import Inbox from "./pages/divisions/home-care/inbox/Inbox";
import Payment from "./pages/divisions/home-care/payment/Payment";
import Settings from "./pages/divisions/home-care/settings/Settings";
import ReferAFriend from "./pages/divisions/home-care/refer-a-friend/ReferAFriend";
import FindCare from "./pages/divisions/home-care/find-care/FindCare";
import FindCareConfirmation from "./pages/divisions/home-care/find-care/FindCareConfirmation";
import Nannies from "./pages/divisions/home-care/children-care/nannies/Nannies";
import BabySitters from "./pages/divisions/home-care/children-care/babysitters/BabySitters";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* company routes */}

            <Route path="/" element={<CompanyLayout />}>
              <Route index element={<LandingPage />} />
              <Route path="referrals" element={<Referrals />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="offerings" element={<Offerings />} />
              <Route path="how-rhomboid-works" element={<HowRhomboidWorks />} />
            </Route>

            {/* home care routes */}

            <Route path="/rhomboid/home-care" element={<HomeCareLayout />}>
              <Route index element={<Home />} />
              <Route path="adult-care" element={<AdultCare />} />
              <Route path="children-care/nannies" element={<Nannies />} />
              <Route
                path="children-care/babysitters"
                element={<BabySitters />}
              />
              <Route path="inbox" element={<Inbox />} />
              <Route path="payment" element={<Payment />} />

              <Route path="find-care" element={<FindCare />} />

              <Route
                path="find-care/:value1/:value2/:value3/confirmation"
                element={<FindCareConfirmation />}
              />

              <Route path="settings-&-preferences" element={<Settings />} />
              <Route path="referal" element={<ReferAFriend />} />

              <Route path="caregivers" element={<Caregivers />}>
                <Route path=":careGiverId" element={<CaregiverDetails />} />
              </Route>

              <Route path="profile" element={<Profile />} />
              <Route
                path="/rhomboid/home-care/account/sign-in"
                element={<SignIn />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
