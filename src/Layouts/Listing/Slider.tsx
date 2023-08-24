import React from "react";

interface Props {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<Props> = ({ value, min, max, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <input
      type="range"
      value={value}
      min={min}
      max={max}
      onChange={handleChange}
    />
  );
};

export default Slider;
