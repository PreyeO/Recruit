import { FC } from "react";

interface Props {
  label: string;
}

const AuthButton: FC<Props> = ({ label }) => {
  return (
    <button className="w-24 md:w-[182px] h-6 md:h-12 border border-[#1d3f56] border-solid rounded-lg text-[#1d3f56] text-xs md:text-xl font-semibold">
      {label}
    </button>
  );
};

export default AuthButton;
