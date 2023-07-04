import {FC} from 'react';
import AuthButton from '../Buttons/AuthButton';
import TextInput from "../Inputs/TextInput"
import Checkbox from '../Inputs/CheckBox';
import PasswordReset from '../Buttons/PasswordReset';



// interface Props {
// }

const SignupForm :FC = () =>{
  return (
    <form className="flex flex-col gap-3">  
      <TextInput placeholder={"Enter your first name"} type={"text"} label="First Name" id="id"/>
      <TextInput placeholder={"Enter your last name"} type={"text"} label="Last Name" id="id"/>
      <TextInput placeholder={"Enter your email"} type={"email"} label="Email" id="id"/>
      <TextInput placeholder={"Enter your password"} type={"password"} label="Password" id="id"/>
      <TextInput placeholder={"Enter your password"} type={"password"} label="Confirm Password" id="id"/>
      <AuthButton label={"Login"}/>
      <div className="flex justify-between">
      <Checkbox label={"Agree to Terms and Policy"} id="id"/>
      <PasswordReset  label={"Forgot Password"}/>
      </div>
    </form>
  );
}

export default SignupForm;
