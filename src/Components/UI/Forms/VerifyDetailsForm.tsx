import TextInput from "../Inputs/TextInput";

const VerifyDetailsForm = () => {
  return (
    <form className="flex flex-col gap-8">
      <div className="flex relative">
        <TextInput
          type="text"
          placeholder="Enter Email OTP"
          label="Enter Code sent to your email"
        />
        <p className="text-[10px] absolute right-0 top-[6px]">
          Did not receive?{" "}
          <span className="text-[#6750a4] cursor-pointer">Resend</span>
        </p>
      </div>
      <div className="relative">
        <TextInput
          type="text"
          placeholder="+234-123-4567-890"
          label="Whatsapp phone number with country code"
        />
        <span className="absolute right-4 top-11 bg-primary-btn rounded-[4px] cursor-pointer px-1 py-[2px] text-white text-[8px]">
          Get Code
        </span>
      </div>
      <TextInput
        type="text"
        placeholder="Enter the code to your Whatsapp"
        label="Phone number OTP"
      />
    </form>
  );
};

export default VerifyDetailsForm;
