import {FC} from 'react';
import { FcGoogle}  from 'react-icons/fc';
import { AiOutlineGithub, AiOutlineLinkedin }  from 'react-icons/ai';







const SignupSocials :FC = () =>{
  return (
    <form className='flex flex-row justify-center gap-4 py-3.5'>
      <button>  
     <FcGoogle className="h-7 w-7"/>
     </button>
     <button>   
     <AiOutlineGithub className="h-7 w-7"/>
     </button> 
     <button>  
     <AiOutlineLinkedin className="h-7 w-7 text-white bg-blue-500"/>
     </button> 
    </form>
  );
}

export default SignupSocials;