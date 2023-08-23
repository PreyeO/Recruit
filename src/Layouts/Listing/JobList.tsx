import { StyledJobList } from "../../Components/Styles/Cards/JobListCard.styled";
import HomeBtn from "../../Components/UI/Buttons/HomeBtn";

import { jobs } from "../UserProfile/UserData";
import { AiFillClockCircle } from "react-icons/ai";
import { BsArrowLeftRight } from "react-icons/bs";

const JobList = () => {
  return (
    <section className="mt-6">
      <div className="flex justify-between">
        <h1 className="text-center text-2xl">Recommended Jobs</h1>
        <div className="flex gap-2">
          <h3>
            <span className="font-extralight">Sorted by:</span> Last update{" "}
          </h3>
          <div className="mt-2">
            <BsArrowLeftRight />
          </div>
        </div>
      </div>

      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="mb-4">
            <StyledJobList>
              <div className="flex gap-10 px-3">
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-bold text-2xl pt-2">{job.category}</h3>
                    <div className="flex gap-3">
                      <p className="pt-4 text-sm font-extralight">{job.date}</p>
                      <div className="pt-5">
                        <AiFillClockCircle />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between py-8">
                    <h4 className="text-xl pt-2">{job.title}</h4>
                    <HomeBtn label="Apply" icon="SideArrow" />
                  </div>

                  <h4 className="text-md">{job.company}</h4>

                  <p className="text-md pt-4">{job.requirements}</p>
                </div>
              </div>
            </StyledJobList>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default JobList;
