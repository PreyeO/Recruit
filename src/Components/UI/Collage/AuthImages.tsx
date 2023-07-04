  import { FC } from "react";
import { StyledAuthPics } from "../../Styles/AuthPage/Authpics.styled";
import AuthImage from '../../../assets/AuthImage.png'



  const AuthImages:FC = () =>{

    return(

      <figure>
      <StyledAuthPics>
        <img src={AuthImage} alt='' />
        </StyledAuthPics>
        
      </figure>
     
    )
  }

  export default AuthImages;