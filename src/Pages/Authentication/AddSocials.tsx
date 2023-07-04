import { LineNav, TimelineNav } from "./TimelineNav";
import { Container } from "../../Components/Styles/General/Container.styled";
import AuthButton from "../../Components/UI/Buttons/AuthButton";
import AddSocialsForm from "../../Components/UI/Forms/AddSocialsForm";

type Props = {};

const AddSocials = (props: Props) => {
  return (
    <Container>
      <TimelineNav />
      <div className="basis-2/3 flex flex-col items-center justify-center gap-12 font-plusJakarta">
        <AddSocialsForm />
        <AuthButton label="Complete Profile" />
        <LineNav />
      </div>
    </Container>
  );
};

export default AddSocials;
