import { useState } from "react";
import { navWER } from "./UserData";
import { BsFillPlusCircleFill } from "react-icons/bs";

type Props = {
  links: JSX.Element[];
};

const ProfileNav = ({ links }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const links = [<Works />, <Qualification />, <Reviews />];

  //   const cycleLinks = () => {
  //     setCurrentIndex((currentIndex + 1) % links.length);
  //   };

  const cycleLinks = (index: any) => {
    setCurrentIndex(index);
  };
  return (
    <>
      <div className="flex justify-between h-11 border-b-[1px] border-[#f1f1f1] border-solid">
        <div className="gap-20 text-dark-gray flex items-start">
          {navWER.map((link, index) => (
            <div className="flex gap-2 items-center" id={link.id}>
              {link.icon}
              <p
                className="text-2xl font-bold cursor-pointer "
                onClick={() => cycleLinks(index)}
              >
                {link.name}
              </p>
            </div>
          ))}
        </div>
        <BsFillPlusCircleFill size={32} />
      </div>
      {links.map((link, index) => (
        <div key={index}>{link}</div>
      ))}
    </>
  );
};

export default ProfileNav;
