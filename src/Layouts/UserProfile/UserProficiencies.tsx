import { datas } from "./UserData";

const UserProficiencies = () => {
  return (
    <div>
      {datas.map((data) => (
        <div key={data.id} className="flex-col">
          <h2>Skills</h2>
          <ul>
            {data.skills[0].split(", ").map((skill, index) => (
              <li key={index} className="text-white bg-indigo-500 ">
                {skill}
              </li>
            ))}
          </ul>

          <h2>Tools</h2>
          <ul>
            {data.tools[0].split(", ").map((tool, index) => (
              <li key={index} className="text-white bg-orange-500 ">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserProficiencies;
