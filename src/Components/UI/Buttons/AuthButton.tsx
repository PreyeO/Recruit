import {FC} from 'react';
import { StyledAuthButtton } from '../../Styles/Buttons/AuthButton.styled';

interface Props {
  label:string,
 
}

const AuthButton :FC<Props> = ({label}) =>{
  return (
    <StyledAuthButtton width='22.5rem' height='56px'>
      {label}
      </StyledAuthButtton>
 
  );
}

export default AuthButton
