import {FC} from "react"

interface Props{
  title:string,
}


const AuthSpan :FC<Props> = ({title}) => {




  return(

    <p className='text-center'>
      {title}
    </p>


  )
}

export default AuthSpan;