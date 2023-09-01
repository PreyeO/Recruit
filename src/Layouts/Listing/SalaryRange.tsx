import React from "react";
import DualHandleSlider from "./DualHandleSlider"; // Adjust the import path

const SalaryRange: React.FC = () => {
  return (
    <div className="hidden md:flex flex-1">
      <DualHandleSlider />
    </div>
  );
};

export default SalaryRange;
