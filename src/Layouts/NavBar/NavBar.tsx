import { useState } from "react";
import { Link } from "react-router-dom";
import { StyledNavbar } from "../../Components/Styles/Layouts/NavBar.styled";
import Logo2 from "../../assets/logo2.png";
import Avatar from "../../assets/avatar.png";
import Sidebar from "./Sidebar";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const closeSideBar = () => {
    setShowSidebar(false);
 };

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Projects",
      path: "/",
    },
    {
      name: "View Jobs",
      path: "/joblisting",
    },
    {
      name: "About Us",
      path: "/",
    },
  ];
  return (
    <>
      <StyledNavbar>
        <div className="flex gap-4 items-center">
          <img src={Logo2} alt="logo" />
        </div>
        <ul className="hidden gap-[60px] text-xl lg:flex">
          {links.map((link) => (
            <li
              className="text-light-gray hover:text-primary-btn"
              key={link.name}
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="lg:flex gap-4 items-center hidden">
          <img src={Avatar} alt="logo" />
        </div>
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
        >
          <FiMenu size={24} />
        </div>
      </StyledNavbar>
      {showSidebar && <Sidebar close={closeSideBar} links={links} />}
    </>
  );
};

export default NavBar;
