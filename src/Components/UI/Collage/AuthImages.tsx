  import { FC } from "react";
  import Ellipse2 from "../../../assets/Ellipse 2.svg"
  import Ellipse3 from "../../../assets/Ellipse 3.svg"
  import rectangle1 from "../../../assets/Rectangle 1.svg"
  import rectangle2 from "../../../assets/Rectangle 2.svg"
  import rectangle3 from "../../../assets/Rectangle 3.svg"
  // import rectangle4 from "../../../assets/Rectangle 4.svg"
  // import rectangle6 from "../../../assets/Rectangle 6.svg"
  // import rectangle7 from "../../../assets/Rectangle 7.svg"
import { StyledAuthPics } from "../../Styles/AuthPage/Authpics.styled";



  const AuthImages:FC = () =>{

    return(

     
      <figure>
      <StyledAuthPics>
        <img src={Ellipse3} alt='' />
        <img src={Ellipse2} alt='' />
        
        </StyledAuthPics>
        <StyledAuthPics>
        <img src={rectangle1} alt='' />
        <img src={rectangle3} alt='' />
     
       
        </StyledAuthPics>
       
        {/* <StyledAuthPics>
        <img src={rectangle7} alt='' />
        <img src={rectangle4} alt='' />
        </StyledAuthPics> */}
        <StyledAuthPics>
        {/* <img src={rectangle6} alt='' /> */}
      
        <img src={rectangle2} alt='' style={{width:"20rem"  }}/>
        </StyledAuthPics>
      </figure>
     
    )
  }

  export default AuthImages;