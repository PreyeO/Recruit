import { FC } from "react";

interface Props {
  label?: string;
  id?: any;
}

const Checkbox: FC<Props> = ({ label, id }) => {
  return (
    <div className="flex items-center gap-1">
      <input type="checkbox" id={id} className="w-[20px] h-[15px]" />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
