import { FC } from "react";
import AuthTitle from "../../Components/UI/Titles/AuthTitle";
import AuthSpan from "../../Components/UI/Titles/AuthSpan";
import SignupForm from "../../Components/UI/Forms/SignupForm";
import { StyledUserAuth } from "../../Components/Styles/AuthPage/UserAuth.styled";
import AuthImages from "../../Components/UI/Collage/AuthImages";
import AuthImage from "../../assets/AuthImage.png";

// interface Props {
// }

const SignUp: FC = () => {
  return (
    <main>
      <StyledUserAuth>
        <div>
          {/* <AuthImages /> */}
          <img src={AuthImage} alt="image" />
        </div>
        <div>
          <AuthTitle title="Hello! Welcome." />
          <AuthSpan title="Create an accout below" />
          <SignupForm />
        </div>
      </StyledUserAuth>
    </main>
  );
};

export default SignUp;
