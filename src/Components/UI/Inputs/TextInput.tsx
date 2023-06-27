import{FC} from 'react';
import { StyledInput } from '../../Styles/Inputs/Input.styled';

interface Props {
  placeholder:string,
  type:string,
  label:string,
  id:any
}

const TextInput :FC <Props> = ({placeholder, type, label, id}) =>{
  return (
    <div> 
      <label htmlFor={id}>{label}</label>
         <br />
    <StyledInput type={type} placeholder={placeholder} id={id}/>
    </div>
  );
}

export default TextInput