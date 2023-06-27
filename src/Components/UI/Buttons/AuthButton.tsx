import {FC} from 'react';
import { StyledAuthButtton } from '../../Styles/Buttons/AuthButton.styled';

interface Props {
  label:string,
 
}

const AuthButton :FC<Props> = ({label}) =>{
  return (
    <StyledAuthButtton >
      {label}
      </StyledAuthButtton>
 
  );
}

export default AuthButton
