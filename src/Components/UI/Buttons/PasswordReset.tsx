import {FC} from 'react';

interface Props {
  label:string,
 
}

const PasswordReset :FC<Props> = ({label}) =>{
  return (
    <button>
      {label}
      </button>
 
  );
}

export default PasswordReset 
