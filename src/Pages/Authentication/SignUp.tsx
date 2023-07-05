import { FC } from "react";
import AuthTitle from "../../Components/UI/Titles/AuthTitle";
import AuthSpan from "../../Components/UI/Titles/AuthSpan";
import SignupForm from "../../Components/UI/Forms/SignupForm";
import AuthImages from "../../Components/UI/Collage/AuthImages";
import { Container } from "../../Components/Styles/General/Container.styled";
import SignupSocials from "../../Components/UI/Forms/SignupSocials";


// interface Props {
// }

const SignUp: FC = () => {
  return (
    <Container>
      <div className="flex w-full justify-around font-plusJakarta items-center overflow-hidden">
        <div>
         <AuthImages />
         </div>
         <div className="flex flex-col pt-10">
         <div className="text-center">
          <AuthTitle title="Hello! Welcome." />
          <AuthSpan title="Create an accout below" />
         </div>
         <SignupSocials />
         <div className="text-center font-extralight py-1.5">or</div>
        
          <SignupForm />
         
          </div>
          </div>
      </Container>
  );
};

export default SignUp;
