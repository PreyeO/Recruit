import TextInput from "../../Components/UI/Inputs/TextInput";
import Button from "../../Components/UI/Buttons/Button";
import { LineNav, TimelineNav } from "./TimelineNav";

type Props = {};

const CompleteProfile = (props: Props) => {
  return (
    <div className="flex w-full h-screen justify-center">
      <TimelineNav />
      <div className="basis-2/3 flex flex-col items-center justify-center gap-16 font-plusJakarta">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div className="relative">
              <TextInput
                type="number"
                placeholder="+234-123-4567-890"
                label="Whatsapp phone number with country code"
              />
              <span className="absolute right-6 top-5 bg-primary-btn rounded-[4px] cursor-pointer px-1 py-[2px] text-white text-[8px]">
                Get Code
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <TextInput
              type="text"
              placeholder="Enter the code to your Whatsapp"
              label="Phone number OTP"
            />
          </div>
        </div>
        <Button>Complete Profile</Button>
        <LineNav />
      </div>
    </div>
  );
};

export default CompleteProfile;
