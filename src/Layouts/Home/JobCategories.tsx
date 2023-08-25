import { FC } from "react";
import JobsButton from "../../Components/UI/Buttons/JobsButton";
import JobPost from "./JobPost";
import { StyledAuthButtton } from "../../Components/Styles/Buttons/AuthButton.styled";

// interface Props {
//   label: string;
// }

const JobCategories: FC = () => {
  return (
    <section className="h-[1700px] md:h-[1550px] lg:h-[1400px] text-white">
      <div className="bg-[#060d11] absolute left-0 w-full h-[1700px] md:h-[1550px] lg:h-[1400px] -z-10" />
      <div className="pt-12">
        <p className="text-xl lg:text-3xl font-bold leading-[160%] max-w-[60rem]">
          We are the only website that provides this information so that you can
          find the job{" "}
          <span className="text-[#435F72]">that really suits you</span> and the
          whole planet becomes your playground!
        </p>
        <div className="flex md:flex-col gap-6 pt-10">
          <div className="flex gap-4 lg:gap-7 flex-wrap">
            <JobsButton label="View All" />
            <JobsButton label="Design" />
            <JobsButton label="Development" />
            <JobsButton label="Marketing" />
            <JobsButton label="Customer Service" />
            <JobsButton label="Finance" />
          </div>
        </div>
      </div>
      <JobPost />
      <JobPost />
      <JobPost />
      <StyledAuthButtton
        width="230px"
        height="60px"
        className="mt-10 self-center"
      >
        <p className="text-2xl font-bold">See More</p>
      </StyledAuthButtton>
      {/* </div> */}
    </section>
  );
};

export default JobCategories;
