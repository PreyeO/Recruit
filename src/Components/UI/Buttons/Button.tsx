import {FC} from 'react';
import { StyledButtton } from '../../Styles/Buttons/Button.styled';

interface Props {
  label:string,
 
}

const Button :FC<Props> = ({label}) =>{
  return (
    <StyledButtton >
      {label}
      </StyledButtton>
 
  );
}

export default Button
