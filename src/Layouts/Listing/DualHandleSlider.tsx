import React, { useState } from "react";
import { Range } from "react-range";
import SalaryInput from "../../Components/UI/Inputs/SalaryInput";

const DualHandleSlider: React.FC = () => {
  const [salaryRange, setSalaryRange] = useState<number[]>([0, 100000]);

  const handleSalaryRangeChange = (newRange: number[]) => {
    setSalaryRange(newRange);
  };

  return (
    <div className="flex flex-col">
      <h3>The Salary</h3>
      <div className="flex gap-2">
        <div className="flex items-center">
          <h1>$</h1>
          <SalaryInput
            value={salaryRange[0]}
            onChange={(value) =>
              handleSalaryRangeChange([value, salaryRange[1]])
            }
          />
        </div>

        <div className="flex items-center">
          <h1>$</h1>
          <SalaryInput
            value={salaryRange[1]}
            onChange={(value) =>
              handleSalaryRangeChange([salaryRange[0], value])
            }
          />
        </div>
      </div>
      <Range
        values={salaryRange}
        step={100}
        min={0}
        max={100000}
        onChange={handleSalaryRangeChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "6px",
              backgroundColor: "#D9D9D9",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              backgroundColor: "#007bff",
              borderRadius: 20,
            }}
          />
        )}
      />
    </div>
  );
};

export default DualHandleSlider;
