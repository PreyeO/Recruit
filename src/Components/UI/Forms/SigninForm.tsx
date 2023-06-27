import {FC} from 'react';
import AuthButton from '../Buttons/AuthButton';
import TextInput from "../Inputs/TextInput"
import PasswordReset from '../Buttons/PasswordReset';
import Checkbox from '../Inputs/CheckBox';
import { StyledUserAuth } from '../../Styles/AuthPage/UserAuth.styled';


// interface Props {
// }

const SigninForm :FC = () =>{
  return (
    <form> 
      <TextInput placeholder={"Enter your email"} type={"email"} label="Email" id="id"/>
      <TextInput placeholder={"Enter your password"} type={"password"} label="Password" id="id"/>
      <AuthButton label={"Login"}/>
      <StyledUserAuth>
      <Checkbox label={"Remember Me"} id="id"/>
      <PasswordReset label={"Forgot Password"}/>
      </StyledUserAuth>
    </form>
  );
}

export default SigninForm;
