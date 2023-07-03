import { LineNav, TimelineNav } from "./TimelineNav";
import TextInput from "../../Components/UI/Inputs/TextInput";
import { Container } from "../../Components/Styles/General/Container.styled";
import AuthButton from "../../Components/UI/Buttons/AuthButton";

type Props = {};

const AddSocials = (props: Props) => {
  return (
    <Container>
      <TimelineNav />
      <main className="basis-2/3 flex flex-col items-center justify-center gap-12 font-plusJakarta">
        <div className="flex flex-col">
          <TextInput
            type="text"
            placeholder="https://twitter.com/..."
            label="Twitter"
          />
          <TextInput
            type="text"
            placeholder="https://www.linkedin.com/..."
            label="LinkedIn"
          />
          <TextInput
            type="text"
            placeholder="https://instagram.com/..."
            label="Instagram"
          />
          <TextInput
            type="text"
            placeholder="https://facebook.com/..."
            label="Facebook"
          />
        </div>
        <AuthButton label="Complete Profile" />
        <LineNav />
      </main>
    </Container>
  );
};

export default AddSocials;
