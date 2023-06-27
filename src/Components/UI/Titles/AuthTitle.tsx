import{FC} from 'react';

interface Props {
  title:string,
}

const AuthTitle :FC <Props> = ({title}) =>{
  return (
    <h1 className='text-center'>{title}</h1>
  );
}

export default AuthTitle
