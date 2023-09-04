import React from "react";
import ModalCard from "../../Components/UI/Cards/ModalCard";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";

type ModalProps = {
  onClose: () => void;
  onSelection: (selection: string) => void;
};

const Modal: React.FC<ModalProps> = ({ onClose, onSelection }) => {
  const handleSelection = (selection: string) => {
    onSelection(selection);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Welcome to The Xhibit</h2>
        <p className="leading-[150%] max-w-[450px] text-sm lg:text-xl">
          Where Boundless Opportunities Converge with Exceptional Talent to
          Forge Success!
        </p>
        <h4 className="pt-6">Choose your Role</h4>
        <div className="flex items-center justify-center text-center gap-6 mt-6">
          <div
            onClick={() => handleSelection("talent")}
            className="cursor-pointer"
          >
            <ModalCard icon={<AiOutlineSearch size={35} />} title="Talent" />
          </div>
          <div className="pt-6">
            <h3>Or</h3>
          </div>
          <div
            onClick={() => handleSelection("recruiter")}
            className="cursor-pointer"
          >
            <ModalCard icon={<AiOutlineUser size={35} />} title="Recruiter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
