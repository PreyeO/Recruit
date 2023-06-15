import{FC} from 'react';
import { StyledInput } from '../../Styles/Inputs/Input.styled';

interface Props {
  label:string,
  type:string,
}

const TextInput :FC <Props> = ({label, type}) =>{
  return (
    <StyledInput>
    <input type={type} placeholder={label}/>
    </StyledInput>
 
  );
}

export default TextInput