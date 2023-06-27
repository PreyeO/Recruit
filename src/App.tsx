// import "./App.css";
import GlobalStyles from "./Components/Styles/General/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/LandingPage/Landing";
import SignIn from "./Pages/Authentication/SignIn";
import SignUp from "./Pages/Authentication/SignUp";
import VerifyDetails from "./Pages/Authentication/VerifyDetails";
import { Container } from "./Components/Styles/General/Container.styled";
// import CompleteProfile from './Pages/Authentication/SignUp'
// import AddSocials from './Pages/Authentication/AddSocials'

function App() {
  return (
    <Container>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verifydetails" element={<VerifyDetails />} />
        </Routes>
      </BrowserRouter>
      </Container>
    
  );
}

export default App;
