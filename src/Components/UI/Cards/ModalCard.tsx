import { FC } from "react";

interface Props {
  icon: JSX.Element;
  title: string;
}

const ModalCard: FC<Props> = ({ title, icon }) => {
  return (
    <div className="w-[100px] md:w-[150px] h-[100px] border border-[#1D3F56] border-solid bg-white hover:bg-[#1D3F56] text-[#1d3f56] hover:text-white rounded-2xl py-4 flex flex-col text-center items-center justify-center">
      {icon}
      <h1 className="">{title}</h1>
    </div>
  );
};

export default ModalCard;
