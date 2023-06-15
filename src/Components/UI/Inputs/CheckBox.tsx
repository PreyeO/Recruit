import{FC} from 'react';

interface Props {
  label:string
  type:string,
}

const Checkbox :FC <Props> = ({label, type}) =>{
  return (
    <input type={type}>
      {label}
    </input>
  );
}

export default Checkbox
