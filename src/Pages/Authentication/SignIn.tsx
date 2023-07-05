import {FC} from 'react';
import AuthTitle from '../../Components/UI/Titles/AuthTitle';
import AuthSpan from '../../Components/UI/Titles/AuthSpan';
import SigninForm from '../../Components/UI/Forms/SigninForm';
import { Container } from '../../Components/Styles/General/Container.styled';
import AuthImages from '../../Components/UI/Collage/AuthImages';
import SignupSocials from '../../Components/UI/Forms/SignupSocials';


// interface Props {
// }

const SignIn :FC = () =>{
  return (
    <Container>
       <div className="flex w-full justify-around font-plusJakarta items-center">
       <AuthImages />
          <div className="flex flex-col pt-10">
         <div className="text-center">
        <AuthTitle title="Welcome Back"/>
        <AuthSpan title="We've missed you. Please signin to catch up on what you've missed."/>
        </div>
        <div>
        <SignupSocials />
        </div>
        <div className="text-center font-extralight py-1.5">or</div>
        <SigninForm />
        </div>
        </div>
      </Container>
  );
}

export default SignIn;
