import React from "react";

interface InputProps {
  value: number;
  onChange: (value: number) => void;
}

const SalaryInput: React.FC<InputProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <input
      type="number"
      value={value}
      onChange={handleChange}
      className="w-24 rounded-md text-black"
    />
  );
};

export default SalaryInput;
