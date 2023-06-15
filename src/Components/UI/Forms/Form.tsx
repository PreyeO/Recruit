import {FC} from 'react';
import Button from '../Buttons/Button';
// import TextInput from "../Inputs/TextInput"


// interface Props {
// }

const Form :FC = () =>{
  return (
    <form>
      {/* <TextInput label={"Enter your first name"} type={"text"}/> */}
      <Button label={"Login"}/>
    </form>
  );
}

export default Form;
