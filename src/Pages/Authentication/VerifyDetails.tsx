import { BsRecordCircleFill, BsRecordCircle } from "react-icons/bs";

type Props = {};

const VerifyDetails = (props: Props) => {
  return (
    <div className="flex w-full h-screen">
      <div className="bg-primary-btn text-white border-8 basis-1/3 pt-[75px] flex flex-col gap-16 rounded-br-[82px]">
        <div className="relative mx-auto w-full max-w-[300px]">
          <div className="before:absolute before:left-2 before:top-10 before:w-1 before:h-[120px] before:bg-white before:rounded">
            <div className="flex items-center">
              <BsRecordCircleFill size={20} />
              <span className="text-lg font-bold pl-2 font-robotoMono">
                VERIFY YOUR DETAILS
              </span>
            </div>
            <p className="w-[190px] pl-10 pt-8 font-light">
              Use the Form to Verify Your Email and Phone Number.
            </p>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[300px]">
          <div className="before:absolute before:left-2 before:top-10 before:w-1 before:h-[120px] before:bg-white before:rounded">
            <div className="flex items-center">
              <BsRecordCircle size={20} />
              <span className="text-lg font-bold pl-2 font-robotoMono">
                COMPLETE YOUR PROFILE
              </span>
            </div>
            <p className="w-[200px] pl-10 pt-8 font-light">
              Use the Form to Complete your profile.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[300px]">
          <div className="flex items-center">
            <BsRecordCircle size={20} />
            <span className="text-lg font-bold pl-2 font-robotoMono">
              ADD SOCIAL MEDIA
            </span>
          </div>
        </div>
      </div>
      <div className="basis-2/3"></div>
    </div>
  );
};

export default VerifyDetails;
