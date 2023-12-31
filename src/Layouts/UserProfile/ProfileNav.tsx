import { useState } from "react";
import { navWER } from "./UserData";
import { BsFillPlusCircleFill } from "react-icons/bs";

type Props = {
  links: JSX.Element[];
};

const ProfileNav = ({ links }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cycleLinks = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="flex justify-between h-11 border-b-[1px] border-[#f1f1f1] border-solid">
        <div className="gap-4 sm:gap-10 md:gap-20 text-dark-gray flex items-start relative">
          {navWER.map((link, index) => (
            <div
              className={`flex gap-2 items-center cursor-pointer hover:text-primary-dark ${
                currentIndex === index
                  ? "text-primary-btn border-b-4 border-primary-btn border-solid pb-2"
                  : "text-dark-gray"
              }`}
              id={link.id}
              onClick={() => cycleLinks(index)}
              key={link.id}
            >
              <span className="hidden sm:block">{link.icon}</span>

              <p className="md:text-2xl font-bold">{link.name}</p>
            </div>
          ))}
        </div>
        <BsFillPlusCircleFill size={32} />
      </div>
      {links[currentIndex]}
    </>
  );
};

export default ProfileNav;
