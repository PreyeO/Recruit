import { FC } from "react";

interface Props {
  label: string;
  background?: string;
  color?: string;
}

const JobsButton: FC<Props> = ({ label }) => {
  return (
    <button className="whitespace-nowrap h-12 rounded-lg bg-[#1d3f56] md:text-xl font-semibold px-4 hover:bg-white hover:text-[#1d3f56]">
      {label}
    </button>
  );
};

export default JobsButton;
