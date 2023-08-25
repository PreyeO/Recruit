import { FC } from "react";

interface Props {
  title: string;
  desc: string;
  icon: JSX.Element;
}

const AdvertCard: FC<Props> = ({ title, desc, icon }) => {
  return (
    <div className="md:w-[397px] text-[#1D3F56] bg-white rounded-2xl py-10 px-6 hover:bg-[#1D3F56] hover:text-white">
      {icon}
      <h1 className="text-2xl pb-2 pt-6">{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default AdvertCard;
