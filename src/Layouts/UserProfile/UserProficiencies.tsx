import {
  StyledProficiencyCard,
  StyledSkillTitle,
} from "../../Components/Styles/Cards/ProficiencyCard.styled";
import { datas } from "./UserData";

const UserProficiencies = () => {
  return (
    <div className="hidden lg:block">
      {datas.map((data) => (
        <div key={data.id} className="flex flex-col justify-center gap-8">
          <StyledProficiencyCard width="260px">
            <StyledSkillTitle>Skills</StyledSkillTitle>
            <ul>
              {data.skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-blue-500 text-white rounded-lg px-4 py-2 flex items-center gap-6 my-2 w-40"
                >
                  {skill.icon}
                  {skill.title}
                </li>
              ))}
            </ul>
            <button className="text-light-gray">5+ more</button>
          </StyledProficiencyCard>
          <StyledProficiencyCard width="260px">
            <StyledSkillTitle>Tools</StyledSkillTitle>
            <ul>
              {data.tools.map((tool, index) => (
                <li
                  key={index}
                  className="bg-orange-500 text-white rounded-lg px-4 py-2 flex items-center gap-6 my-2 w-40"
                >
                  {tool.icon}
                  {tool.title}
                </li>
              ))}
            </ul>
            <button className="text-light-gray">5+ more</button>
          </StyledProficiencyCard>

          <StyledProficiencyCard width="260px">
            <StyledSkillTitle>Experience</StyledSkillTitle>
            <ul>
              {data.experiences.map((experience, index) => (
                <li key={index} className="flex gap-3 items-center my-2 w-40">
                  <div>{experience.icon}</div>
                  <div>
                    <h3 className="font-bold">{experience.title}</h3>
                    <p className="font-light text-sm">{experience.company}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button className="text-light-gray">5+ more</button>
          </StyledProficiencyCard>
        </div>
      ))}
    </div>
  );
};

export default UserProficiencies;
