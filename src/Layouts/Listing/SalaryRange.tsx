// SalaryRange.tsx
import React, { useState } from "react";
import Slider from "./Slider";
import SalaryInput from "../../Components/UI/Inputs/SalaryInput";

interface SalaryRangeProps {
  min: number;
  max: number;
}

const SalaryRange: React.FC<SalaryRangeProps> = ({ min, max }) => {
  const [salary, setSalary] = useState(min);

  const handleSalaryChange = (newSalary: number) => {
    setSalary(newSalary);
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-10">
        <h3>Monthly Salary</h3>
        <div className="flex">
          <h1>$</h1>
          <SalaryInput value={salary} onChange={handleSalaryChange} />
        </div>
      </div>
      <Slider
        value={salary}
        min={min}
        max={max}
        onChange={handleSalaryChange}
      />
    </div>
  );
};

export default SalaryRange;
