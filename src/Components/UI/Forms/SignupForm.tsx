import {FC} from 'react';
import AuthButton from '../Buttons/AuthButton';
import TextInput from "../Inputs/TextInput"
import Checkbox from '../Inputs/CheckBox';
import PasswordReset from '../Buttons/PasswordReset';
import { StyledUserAuth } from '../../Styles/AuthPage/UserAuth.styled';


// interface Props {
// }

const SignupForm :FC = () =>{
  return (
    <form> 
      <TextInput placeholder={"Enter your first name"} type={"text"} label="First Name" id="id"/>
      <TextInput placeholder={"Enter your last name"} type={"text"} label="Last Name" id="id"/>
      <TextInput placeholder={"Enter your email"} type={"email"} label="Email" id="id"/>
      <TextInput placeholder={"Enter your password"} type={"password"} label="Password" id="id"/>
      <TextInput placeholder={"Enter your password"} type={"password"} label="Confirm Password" id="id"/>
      <AuthButton label={"Login"}/>
      <StyledUserAuth>
      <Checkbox label={"Agree to Terms and Policy"} id="id"/>
      <PasswordReset  label={"Forgot Password"}/>
      </StyledUserAuth>
    </form>
  );
}

export default SignupForm;
