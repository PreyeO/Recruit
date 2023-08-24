import { FC } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { StyledSearchInput } from "../../Styles/Inputs/SearchInput.styled";

interface Props {
  id?: any;
  type: string;
  placeholder?: string;
}

const Search: FC<Props> = ({ id, type, placeholder }) => {
  return (
    <div className="relative flex items-center gap-1">
      <StyledSearchInput
        type={type}
        placeholder={placeholder}
        id={id}
      ></StyledSearchInput>
      <AiOutlineSearch
        className="absolute left-3 top-1/2 transform -translate-y-1/2"
        size={30}
      />
    </div>
  );
};

export default Search;
