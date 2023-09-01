import {
  StyledProficiencyCard,
  StyledSkillTitle,
} from "../../Components/Styles/Cards/ProficiencyCard.styled";
import Checkbox from "../../Components/UI/Inputs/CheckBox";
import { datas } from "../UserProfile/UserData";
import { FaTimes } from "react-icons/fa";

type Props = {
  toggleFilter: () => void;
};

const JobFilterMobile = ({ toggleFilter }: Props) => {
  return (
    <div className="bg-blue-100 px-3 py-6 flex flex-col rounded-lg gap-5 absolute top-52 left-1 w-96">
      <div className="flex justify-between items-center">
        <h4 className="text-xl">Filter</h4>
        <div className="cursor-pointer" onClick={toggleFilter}>
          <FaTimes size={20} />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {datas.map((data) => (
          <div key={data.id} className="flex flex-wrap justify-between">
            <StyledProficiencyCard width="170px">
              <StyledSkillTitle>Schedule</StyledSkillTitle>
              <ul className="flex flex-col gap-4">
                {data.schedules.map((schedule, index) => (
                  <li
                    key={index}
                    className="rounded-lg flex items-center gap-2 text-sm"
                  >
                    <Checkbox />
                    {schedule.title}
                  </li>
                ))}
              </ul>
            </StyledProficiencyCard>
            <StyledProficiencyCard width="170px">
              <StyledSkillTitle>Location</StyledSkillTitle>
              <ul className="flex flex-col gap-4">
                {data.locations.map((location, index) => (
                  <li
                    key={index}
                    className="rounded-lg flex items-center gap-2"
                  >
                    <Checkbox />
                    {location.title}
                  </li>
                ))}
              </ul>
            </StyledProficiencyCard>
          </div>
        ))}
      </div>
      <div>
      {datas.map((data) => (
        <div key={data.id} className="flex flex-wrap justify-start gap-3">
          <StyledProficiencyCard width="180px">
            <StyledSkillTitle>Experience</StyledSkillTitle>
            <ul className="flex flex-col gap-4">
              {data.joblevels.map((level, index) => (
                <li key={index} className="rounded-lg flex items-center gap-2">
                  <Checkbox />
                  {level.title}
                </li>
              ))}
            </ul>
          </StyledProficiencyCard>
        </div>
      ))}
        
      </div>
    </div>
  );
};

export default JobFilterMobile;
