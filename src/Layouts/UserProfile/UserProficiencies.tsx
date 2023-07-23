import { StyledProficiencyCard } from "../../Components/Styles/Cards/ProficiencyCard.styled";
import { datas } from "./UserData";

const UserProficiencies = () => {
  return (
    <div>
      {datas.map((data) => (
        <div key={data.id} className="flex flex-col justify-center gap-8">
          <StyledProficiencyCard>
            <h2>Skills</h2>
            <ul>
              {data.skills.map((skill, index) => (
                <li
                  key={index}
                  className="bg-blue-500 text-white rounded-lg px-4 py-2 flex items-center gap-8 my-2 w-40"
                >
                  {skill.icon}
                  {skill.title}
                </li>
              ))}
            </ul>
          </StyledProficiencyCard>
          <StyledProficiencyCard>
            <h2>Tools</h2>
            <ul>
              {data.tools.map((tool, index) => (
                <li
                  key={index}
                  className="bg-orange-500 text-white rounded-lg px-4 py-2 flex items-center gap-8 my-2 w-40"
                >
                  {tool.icon}
                  {tool.title}
                </li>
              ))}
            </ul>
          </StyledProficiencyCard>

          <StyledProficiencyCard>
            <h2>Experience</h2>
            <ul>
              {data.experiences.map((experience, index) => (
                <li key={index} className="px-2 py-2 items-center my-2 w-40">
                  <div className="flex gap-6">
                    <div style={{ fontSize: "1.5rem" }}>{experience.icon}</div>
                    <div>
                      {experience.title}
                      <div className="font-light">{experience.company}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </StyledProficiencyCard>
        </div>
      ))}
    </div>
  );
};

export default UserProficiencies;
