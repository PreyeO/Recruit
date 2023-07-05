import {FC} from 'react';
import AuthButton from '../Buttons/AuthButton';
import TextInput from "../Inputs/TextInput"
import PasswordReset from '../Buttons/PasswordReset';
import Checkbox from '../Inputs/CheckBox';



// interface Props {
// }

const SigninForm :FC = () =>{
  return (
    <form className="flex flex-col gap-3 items-center "> 
      <TextInput placeholder={"Enter your email"} type={"email"} label="Email" id="id"/>
      <TextInput placeholder={"Enter your password"} type={"password"} label="Password" id="id"/>
      <AuthButton label={"Login"}/>
      <div className="flex justify-evenly w-full text-sm">
      <Checkbox label={"Remember Me"} id="id"/>
      <PasswordReset label={"Forgot Password"}/>
      </div>
    </form>
  );
}

export default SigninForm;
