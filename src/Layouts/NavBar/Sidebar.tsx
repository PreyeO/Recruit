import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../assets/avatar.png";
import { FaTimes } from "react-icons/fa";
import { LogoutBtn } from "../../Components/Styles/Buttons/LogoutBtn";

type Props = {
  links: {
    name: string;
    path: string;
  }[];
  close: () => void;
};

const Sidebar: React.FC<Props> = ({ links, close }) => {
  return (
    <div className="absolute top-0 right-0 bg-white w-48 h-screen z-50 px-6 pt-6 flex flex-col animate-[slide_300ms_ease-in-out] shadow-2xl">
      <div className="flex justify-between items-center mb-10">
        <img src={Avatar} alt="logo" className="w-10" />
        <div onClick={close} className="cursor-pointer">
          <FaTimes size={20} />
        </div>
      </div>
      <ul className="gap-8 flex flex-col">
        {links.map((link) => (
          <li
            className="text-light-gray hover:text-primary-btn"
            key={link.name}
            onClick={close}
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <LogoutBtn className="mt-10">Log Out</LogoutBtn>
    </div>
  );
};

export default Sidebar;
