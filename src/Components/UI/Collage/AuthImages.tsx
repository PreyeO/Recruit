  import { FC } from "react";
import { StyledAuthPics } from "../../Styles/AuthPage/Authpics.styled";
import AuthImage from '../../../assets/AuthImage.png'



  const AuthImages:FC = () =>{

    return(

     
      <StyledAuthPics>
        <img src={AuthImage} alt=''/>
        </StyledAuthPics>
     
    )
  }

  export default AuthImages;