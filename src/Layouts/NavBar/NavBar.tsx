import { Link } from "react-router-dom";
import { StyledNavbar } from "../../Components/Styles/Layouts/NavBar.styled";
import Logo2 from "../../assets/logo2.png";
import Avatar from "../../assets/avatar.png";

const NavBar = () => {
  return (
    <StyledNavbar>
      <div className="flex gap-4 items-center">
        <img src={Logo2} alt="logo" />
      </div>
      <ul className="hidden gap-[60px] text-xl text-light-gray lg:flex hover:text-primary-btn">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">Projects</Link>
        </li>
        <li>
          <Link to="/project">View Jobs</Link>
        </li>
        <li>
          <Link to="/jobs">About Us</Link>
        </li>
      </ul>
      <div className="flex gap-4 items-center">
        <img src={Avatar} alt="logo" />
      </div>
    </StyledNavbar>
  );
};

export default NavBar;
