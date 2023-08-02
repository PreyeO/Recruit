import { FC } from "react";
import JobsButton from "../../Components/UI/Buttons/JobsButton";
import JobPost from "./JobPost";

// interface Props {
//   label: string;
// }

const JobCategories: FC = () => {
  return (
    <section className=" h-[1500px] flex flex-col text-white">
      <div className="bg-[#060d11] absolute left-0 w-full">
        <div className="px-14 pt-12">
          <p className="text-3xl font-bold leading-[160%] max-w-[60rem] mx-auto">
            We are the only website that provides this information so that you
            can find the job{" "}
            <span className="text-[#435F72]">that really suits you</span> and
            the whole planet becomes your playground!
          </p>
          <div className="flex flex-col gap-6 items-center py-10">
            <div className="flex gap-7 ">
              <JobsButton label="View All" background="white" color="#1d3f56" />
              <JobsButton label="Engineering" />
              <JobsButton label="Administration" />
              <JobsButton label="Legal" />
              <JobsButton label="Music" />
            </div>
            <div className="flex gap-7 mb-6">
              <JobsButton label="Academics" />
              <JobsButton label="Sales" />
              <JobsButton label="Photography" />
              <JobsButton label="Business" />
              <JobsButton label="Tech" />
            </div>
          </div>
        </div>
        <div className="absolute h-[2px] left-0 bg-[#8e9faa] w-full"></div>
        <JobPost />
      </div>
    </section>
  );
};

export default JobCategories;
