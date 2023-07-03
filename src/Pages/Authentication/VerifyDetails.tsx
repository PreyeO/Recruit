import { Container } from "../../Components/Styles/General/Container.styled";
import AuthButton from "../../Components/UI/Buttons/AuthButton";
import VerifyDetailsForm from "../../Components/UI/Forms/VerifyDetailsForm";
import { LineNav, TimelineNav } from "./TimelineNav";

type Props = {};

const VerifyDetails = (props: Props) => {
  return (
    <Container>
      <TimelineNav />
      <div className="basis-2/3 flex flex-col items-center justify-center gap-12 font-plusJakarta">
        <VerifyDetailsForm />
        <AuthButton label="Verify Account" />
        <LineNav />
      </div>
    </Container>
  );
};

export default VerifyDetails;
