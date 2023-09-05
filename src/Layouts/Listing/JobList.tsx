import { useState } from "react";
import { StyledJobList } from "../../Components/Styles/Cards/JobListCard.styled";
import HomeBtn from "../../Components/UI/Buttons/HomeBtn";

import { jobs } from "../UserProfile/UserData";
import { AiFillClockCircle } from "react-icons/ai";
import { BsArrowLeftRight } from "react-icons/bs";
import JobFilterMobile from "./JobFilterMobile";

const JobList = () => {
  const [showFilter, setShowFilter] = useState(false);

  const toggleFilter = () => {
    showFilter === true ? setShowFilter(false) : setShowFilter(true);
  };

  return (
    <section className="mt-6">
      <div className="flex justify-between mb-4 items-center">
        <h1 className="md:text-center text-bold md:text-2xl">
          Recommended Jobs
        </h1>
        <div className="flex gap-3 items-center">
          <h3 className="hidden md:block">
            <span className="font-extralight pb-4">Sorted by:</span>Last update
          </h3>
          <div className="flex items-center gap-3">
            <BsArrowLeftRight />
            <p
              className="block md:hidden"
              onClick={() => {
                setShowFilter(true);
              }}
            >
              Filter
            </p>
          </div>
        </div>
      </div>

      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="mb-4">
            <StyledJobList>
              <div className="flex gap-10">
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold">{job.category}</h3>
                    <div className="flex gap-3 items-center">
                      <p className="text-sm font-extralight">{job.date}</p>
                      <AiFillClockCircle />
                    </div>
                  </div>
                  <div className="flex justify-between gap-3 py-5 items-center">
                    <h4 className="text-xl">{job.title}</h4>
                    <HomeBtn label="Apply" icon="SideArrow" />
                  </div>
                  <h4 className="text-sm">{job.company}</h4>
                  <p className="text-md pt-4 md:w-3/4">{job.requirements}</p>
                </div>
              </div>
            </StyledJobList>
          </li>
        ))}
      </ul>
      {showFilter && <JobFilterMobile toggleFilter={toggleFilter} />}
    </section>
  );
};

export default JobList;
