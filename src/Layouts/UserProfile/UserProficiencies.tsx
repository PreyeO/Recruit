import { datas } from "./UserData";

const UserProficiencies = () => {
  return (
    <div>
      {datas.map((data) => (
        <div key={data.id} className="flex flex-col justify-center gap-12">
          <div>
            <h2>Skills</h2>
            <ul>
              {data.skills.map((skill, index) => (
                <li
                  key={index}
                  className="text-white bg-blue-500 flex items-center gap-2"
                >
                  {skill.icon}
                  {skill.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Tools</h2>
            <ul>
              {data.tools.map((tool, index) => (
                <li
                  key={index}
                  className="text-white bg-orange-500 flex items-center gap-2"
                >
                  {tool.icon}
                  {tool.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserProficiencies;
