import { BsRecordCircleFill, BsRecordCircle } from "react-icons/bs";
import { HiCheckCircle } from "react-icons/hi";
import { useLocation } from "react-router-dom";

type Props = {};

export const TimelineNav = (props: Props) => {
  let location = useLocation();
  return (
    <div className="bg-primary-btn text-white border-8 basis-1/3 pt-[75px] md:flex flex-col gap-16 rounded-br-[82px] hidden pl-5">
      <div className="relative mx-auto w-full max-w-[300px]">
        <div className="before:absolute before:left-2 before:top-10 before:w-1 before:h-[120px] before:bg-white before:rounded">
          <div className="flex items-center">
            {location.pathname === "/verifydetails" ? (
              <BsRecordCircleFill size={20} />
            ) : (
              <HiCheckCircle size={24} />
            )}

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
            {location.pathname === "/completeprofile" ? (
              <BsRecordCircleFill size={20} />
            ) : (
              <BsRecordCircle size={20} />
            )}
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
          {location.pathname === "/addsocials" ? (
            <BsRecordCircleFill size={20} />
          ) : (
            <BsRecordCircle size={20} />
          )}
          <span className="text-lg font-bold pl-2 font-robotoMono">
            ADD SOCIAL MEDIA
          </span>
        </div>
      </div>
    </div>
  );
};

export const LineNav = () => {
  let location = useLocation();
  return (
    <div className="flex gap-7">
      <div
        className={`w-[105px] h-1 rounded ${
          location.pathname === "/verifydetails"
            ? "bg-dark-blue"
            : "bg-[#a8a8a8]"
        }`}
      />
      <div
        className={`w-[105px] h-1 rounded ${
          location.pathname === "/completeprofile"
            ? "bg-dark-blue"
            : "bg-[#a8a8a8]"
        }`}
      />
      <div
        className={`w-[105px] h-1 rounded ${
          location.pathname === "/addsocials" ? "bg-dark-blue" : "bg-[#a8a8a8]"
        }`}
      />
    </div>
  );
};
