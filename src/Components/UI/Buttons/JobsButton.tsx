import { FC } from "react";

interface Props {
  label: string;
}

const JobsButton: FC<Props> = ({ label }) => {
  return (
    <button className="w-[182px] h-12 border bg-[#1d3f56] border-solid rounded-lg text-[white] text-xl font-semibold">
      {label}
    </button>
  );
};

export default JobsButton;
