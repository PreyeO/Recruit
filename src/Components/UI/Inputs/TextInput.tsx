import{FC} from 'react';
import { StyledInput } from '../../Styles/Inputs/Input.styled';

interface Props {
  placeholder:string,
  type:string,
}

const TextInput :FC <Props> = ({placeholder, type}) =>{
  return (
    <StyledInput type={type} placeholder={placeholder} />
 
  );
}

export default TextInput