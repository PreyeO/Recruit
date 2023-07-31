import { FC } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowUpRightCircleFill,
} from "react-icons/bs";

interface Props {
  label: string;
  icon: "UpArrow" | "SideArrow";
}

const HomeBtn: FC<Props> = ({ label, icon }) => {
  const renderIcon = () => {
    switch (icon) {
      case "UpArrow":
        return (
          <BsFillArrowUpRightCircleFill
            size={20}
            style={{ marginLeft: "1rem", marginRight: "0.5rem" }}
          />
        );
      case "SideArrow":
        return (
          <BsFillArrowRightCircleFill
            size={20}
            style={{ marginLeft: "1rem", marginRight: "0.5rem" }}
          />
        );
      default:
        return null;
    }
  };
  return (
    <button className=" w-[170px] h-10 rounded-lg bg-white text-primary-btn px-1 py-1 flex items-center text-lg font-bold pl-4 text-center justify-center">
      {label}
      {renderIcon()}
    </button>
  );
};

export default HomeBtn;
