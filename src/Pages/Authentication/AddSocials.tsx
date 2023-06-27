import { LineNav, TimelineNav } from "./TimelineNav";
import TextInput from "../../Components/UI/Inputs/TextInput";
import Button from "../../Components/UI/Buttons/Button";

type Props = {};

const AddSocials = (props: Props) => {
  return (
    <div className="flex w-full h-screen justify-center">
      <TimelineNav />
      <div className="basis-2/3 flex flex-col items-center justify-center gap-16 font-plusJakarta">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm">Twitter</p>
            <TextInput type="text" placeholder="https://twitter.com/..." />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">LinkedIn</p>
            <TextInput type="text" placeholder="https://www.linkedin.com/..." />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Instagram</p>
            <TextInput type="text" placeholder="https://instagram.com/..." />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Facebook</p>
            <TextInput type="text" placeholder="https://facebook.com/..." />
          </div>
        </div>
        <Button>Complete Profile</Button>
        <LineNav />
      </div>
    </div>
  );
};

export default AddSocials;
