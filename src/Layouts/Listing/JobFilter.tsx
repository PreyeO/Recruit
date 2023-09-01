import {
  StyledProficiencyCard,
  StyledSkillTitle,
} from "../../Components/Styles/Cards/ProficiencyCard.styled";
import Checkbox from "../../Components/UI/Inputs/CheckBox";
import { datas } from "../UserProfile/UserData";

const JobFilter = () => {
  return (
    <div className="hidden lg:block mt-6">
      <h1 className="text-center text-2xl pb-4">Filters</h1>
      {datas.map((data) => (
        <div key={data.id} className="flex flex-col justify-center gap-8">
          <StyledProficiencyCard width="260px">
            <StyledSkillTitle fontSize="24px">Schedule</StyledSkillTitle>
            <ul>
              {data.schedules.map((schedule, index) => (
                <li
                  key={index}
                  className="text-black rounded-lg px-2 py-2 flex items-center gap-4 my-2 w-40"
                >
                  <Checkbox />
                  {schedule.title}
                </li>
              ))}
            </ul>
          </StyledProficiencyCard>
          <StyledProficiencyCard width="260px">
            <StyledSkillTitle fontSize="24px">Location</StyledSkillTitle>
            <ul>
              {data.locations.map((location, index) => (
                <li
                  key={index}
                  className="text-black rounded-lg px-2 py-2 flex items-center gap-4 my-2 w-40"
                >
                  <Checkbox />
                  {location.title}
                </li>
              ))}
            </ul>
          </StyledProficiencyCard>

          <StyledProficiencyCard width="260px">
            <StyledSkillTitle fontSize="24px">Experience</StyledSkillTitle>
            <ul>
              {data.joblevels.map((level, index) => (
                <li
                  key={index}
                  className="text-black rounded-lg px-2 py-2 flex items-center gap-4 my-2 w-40"
                >
                  <Checkbox />
                  {level.title}
                </li>
              ))}
            </ul>
          </StyledProficiencyCard>
        </div>
      ))}
    </div>
  );
};

export default JobFilter;
