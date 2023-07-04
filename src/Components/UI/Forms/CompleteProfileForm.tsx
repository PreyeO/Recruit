import TextInput from "../Inputs/TextInput";

type Props = {};

const CompleteProfileForm = (props: Props) => {
  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col relative">
        <TextInput
          type="text"
          placeholder="+234-123-4567-890"
          label="Whatsapp phone number with country code"
        />
        <span className="absolute right-4 top-11 bg-primary-btn rounded-[4px] cursor-pointer px-1 py-[2px] text-white text-[8px]">
          Get Code
        </span>
      </div>
      <div className="flex flex-col">
        <TextInput
          type="text"
          placeholder="Enter the code to your Whatsapp"
          label="Phone number OTP"
        />
      </div>
    </form>
  );
};

export default CompleteProfileForm;
