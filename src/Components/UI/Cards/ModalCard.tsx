import { FC } from "react";

interface Props {
  icon: JSX.Element;
  title: string;
}

const ModalCard: FC<Props> = ({ title, icon }) => {
  return (
    <div className="w-[150px] h-[100px] bg-[#1D3F56] text-white rounded-2xl py-4 flex-col text-center items-center justify-center">
      {icon}
      <h1>{title}</h1>
    </div>
  );
};

export default ModalCard;
