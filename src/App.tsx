import GlobalStyles from "./Components/Styles/General/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Landing from "./Pages/LandingPage/Landing";
import SignIn from "./Pages/Authentication/SignIn";
import SignUp from "./Pages/Authentication/SignUp";
import VerifyDetails from "./Pages/Authentication/VerifyDetails";
import CompleteProfile from "./Pages/Authentication/CompleteProfile";
import AddSocials from "./Pages/Authentication/AddSocials";
import Profile from "./Pages/ProfilePage/Profile";
import JobListing from "./Pages/JobListingPage/JobListing";
import WithoutNav from "./Layouts/NavBar/WithoutNav";
import WithNav from "./Layouts/NavBar/WithNav";
import Home from "./Layouts/Home/home";
// import NavBar from "./Layouts/NavBar/NavBar";
// import Footer from "./Layouts/Footer/Footer";
// import FooterPreye from "./Layouts/Footer/FooterPreye";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/verifydetails" element={<VerifyDetails />} />
            <Route path="/completeprofile" element={<CompleteProfile />} />
            <Route path="/addsocials" element={<AddSocials />} />
          </Route>

          <Route element={<WithNav />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/jobListing" element={<JobListing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
