import { FC } from "react";
import { CiLocationOn } from "react-icons/ci";
import { StyledSearchInput } from "../../Styles/Inputs/SearchInput.styled";

interface Props {
  id?: any;
  type: string;
  placeholder?: string;
}

const Select: FC<Props> = ({ id, type, placeholder }) => {
  return (
    <div className="relative flex items-center gap-1">
      <StyledSearchInput
        type={type}
        placeholder={placeholder}
        id={id}
      ></StyledSearchInput>
      <CiLocationOn
        className="absolute left-3 top-1/2 transform -translate-y-1/2"
        size={30}
      />
    </div>
  );
};

export default Select;
