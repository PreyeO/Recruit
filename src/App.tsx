import './App.css'
import GlobalStyles from './Components/Styles/General/GlobalStyles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Pages/LandingPage/Landing'
import SignIn from './Pages/Authentication/SignIn'
import SignUp from './Pages/Authentication/SignUp'

function App() {
 

  return (
    <>
    <GlobalStyles />
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
     </Routes>
     </BrowserRouter>
     </>
  
  )
}

export default App
