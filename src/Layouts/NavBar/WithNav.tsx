import NavBar from "./NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const WithNav = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default WithNav;
