import { FC } from "react";

interface Props {
  label: string;
  background?: string;
  color?: string;
}

const JobsButton: FC<Props> = ({ label, color, background }) => {
  return (
    <button
      className="w-[182px] h-12 border border-[#1d3f56] border-solid rounded-lg bg-[#1d3f56] text-xl font-semibold"
      style={{ background: background, color: color }}
    >
      {label}
    </button>
  );
};

export default JobsButton;
