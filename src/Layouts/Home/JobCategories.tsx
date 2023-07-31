import { FC } from "react";
import JobsButton from "../../Components/UI/Buttons/JobsButton";
import JobPost from "./JobPost";

// interface Props {
//   label: string;
// }

const JobCategories: FC = () => {
  return (
    <section className="flex flex-col ">
      <div>
        <p className="text-3xl font-bold leading-[160%]">
          We are the only website that provides this information so that you can
          find the job that really suits you and the whole planet becomes your
          playground!
        </p>
        <div className="flex flex-col gap-6 items-center py-10">
          <div className="flex gap-7 ">
            <JobsButton label="View All" />
            <JobsButton label="Engineering" />
            <JobsButton label="Administration" />
            <JobsButton label="Legal" />
            <JobsButton label="Content Creator" />
          </div>
          <div className="flex gap-7 ">
            <JobsButton label="Teacher" />
            <JobsButton label="Sales" />
            <JobsButton label="Photography" />
            <JobsButton label="Account" />
            <JobsButton label="Modelling" />
          </div>
        </div>
        <div className="absolute h-[1px] left-0 bg-[red] w-full"></div>
        <JobPost />
      </div>
    </section>
  );
};

export default JobCategories;
