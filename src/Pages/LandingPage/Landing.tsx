import { FC } from "react";
import Home from "../../Layouts/Home/home";
import Footer from "../../Layouts/Footer/Footer";
import NavBar from "../../Layouts/NavBar/NavBar";

// interface Props {
// }

const Landing: FC = () => {
  return (
    <main>
      <NavBar />
      <Home />
      <Footer />
    </main>
  );
};

export default Landing;
