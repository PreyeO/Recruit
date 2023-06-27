import{FC} from 'react';

interface Props {
  label:string
  id:any
}

const Checkbox :FC <Props> = ({label, id}) =>{
  return (
    <div> 
    <label htmlFor={id}>{label}</label>
    <input type="checkbox" id={id}/>
  </div>
  
  );
}

export default Checkbox
