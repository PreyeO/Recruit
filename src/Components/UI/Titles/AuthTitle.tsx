import{FC} from 'react';

interface Props {
  title:string,
}

const AuthTitle :FC <Props> = ({title}) =>{
  return (
    <h1 className="font-extrabold text-3xl">{title}</h1>
  );
}

export default AuthTitle
