import { FC } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const SignupSocials: FC = () => {
  return (
    <form className="flex flex-row justify-center gap-8 py-3.5">
      <button className="rounded-full p-3 border border-solid border-primary-btn">
        <FcGoogle className="h-7 w-7" />
      </button>
      <button className="rounded-full p-3 border border-solid border-primary-btn">
        <AiOutlineGithub className="h-7 w-7" />
      </button>
      <button className="rounded-full p-3 border border-solid border-primary-btn">
        <FaLinkedin className="h-7 w-7 text-white bg-blue-500" />
      </button>
    </form>
  );
};

export default SignupSocials;
