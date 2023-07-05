import { FC } from "react";
import AuthButton from "../Buttons/AuthButton";
import TextInput from "../Inputs/TextInput";
import PasswordReset from "../Buttons/PasswordReset";
import Checkbox from "../Inputs/CheckBox";
import { Link } from "react-router-dom";
import AuthSpan from "../Titles/AuthSpan";

// interface Props {
// }

const SigninForm: FC = () => {
  return (
    <form className="flex flex-col gap-3 items-center ">
      <TextInput
        placeholder={"Enter your email"}
        type={"email"}
        label="Email"
        id="id"
      />
      <TextInput
        placeholder={"Enter your password"}
        type={"password"}
        label="Password"
        id="id"
      />
      <div className="flex justify-between w-full text-sm">
        <Checkbox label={"Remember Me"} id="id" />
        <PasswordReset label={"Forgot Password"} />
      </div>

      <AuthButton label={"Login"} />
      <div className="flex flex-row gap-2 justify-center">
        <AuthSpan title={"Don't have an account? "} />
        <Link to="/signup" className="text-blue-500 pt-1">
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default SigninForm;
