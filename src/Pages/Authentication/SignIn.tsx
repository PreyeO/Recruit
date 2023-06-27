import {FC} from 'react';
import AuthTitle from '../../Components/UI/Titles/AuthTitle';
import AuthSpan from '../../Components/UI/Titles/AuthSpan';
import SigninForm from '../../Components/UI/Forms/SigninForm';
import { StyledUserAuth } from '../../Components/Styles/AuthPage/UserAuth.styled';


// interface Props {
// }

const SignIn :FC = () =>{
  return (
    <main>
      <StyledUserAuth>
      <div>
          Hello my guy
          </div>
          <div>
        <AuthTitle title="Welcome Back"/>
        <AuthSpan title="We've missed you. Sign up to catchup on what you've missed."/>
        <SigninForm />
        </div>
      </StyledUserAuth>
    </main>
  );
}

export default SignIn;
