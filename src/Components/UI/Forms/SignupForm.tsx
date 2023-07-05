import { FC } from "react";
import AuthButton from "../Buttons/AuthButton";
import TextInput from "../Inputs/TextInput";
import Checkbox from "../Inputs/CheckBox";
import PasswordReset from "../Buttons/PasswordReset";
import AuthSpan from "../Titles/AuthSpan";
import { Link } from "react-router-dom";

// interface Props {
// }

const SignupForm: FC = () => {
  return (
    <form className="flex flex-col gap-3 mb-3">
      <TextInput
        placeholder={"Enter your first name"}
        type={"text"}
        label="First Name"
        id="id"
      />
      <TextInput
        placeholder={"Enter your last name"}
        type={"text"}
        label="Last Name"
        id="id"
      />
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
      <TextInput
        placeholder={"Enter your password"}
        type={"password"}
        label="Confirm Password"
        id="id"
      />
      <div className="flex justify-around text-sm">
        <Checkbox label={"Agree to Terms and Policy"} id="id" />
        <PasswordReset label={"Forgot Password"} />
      </div>
      <AuthButton label={"Continue"} />
      <div className="flex flex-row gap-2 justify-center">
        <AuthSpan title={"Already have an account? "} />
        <Link to="/signin" className="text-blue-500 pt-1">
          Login
        </Link>
      </div>
    </form>
  );
};

export default SignupForm;
