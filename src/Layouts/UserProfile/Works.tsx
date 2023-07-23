import { StyledProficiencyCard } from "../../Components/Styles/Cards/ProficiencyCard.styled";
import { works } from "./UserData";
import Projectlogo from "../../assets/Project.svg";

const Works = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Qualification</h2>

      <ul>
        {works.map((work) => (
          <li key={work.id} className="mb-4 w-2/3 ">
            <StyledProficiencyCard>
              <div>
                <figure>
                  <img src={Projectlogo} alt="school logo" />
                </figure>
                <div>
                  <h3 className="font-semibold pt-2">{work.title}</h3>
                  <h4 className="text-gray-600 pt-4">{work.description}</h4>
                </div>
              </div>
              <button
                className=" rounded-lg px-4 py-2 text-primary-btn"
                style={{ border: "1px solid #1d3f56" }}
              >
                View More
              </button>
            </StyledProficiencyCard>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Works;
