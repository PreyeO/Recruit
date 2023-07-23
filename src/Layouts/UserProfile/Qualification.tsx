import { StyledProfileCrd } from "../../Components/Styles/Cards/ProfileCard.styled";
import { qualifications } from "./UserData";
import Schoollogo from "../../assets/schllogo.svg";

const Qualification = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Qualification</h2>

      <ul>
        {qualifications.map((qualification) => (
          <li key={qualification.id} className="mb-4 w-1/3 ">
            <StyledProfileCrd>
              <div className="flex gap-10">
                <div>
                  <figure style={{ width: "5rem" }}>
                    <img src={Schoollogo} alt="school logo" />
                  </figure>
                </div>
                <div>
                  <h3 className="font-semibold">{qualification.name}</h3>
                  <h4 className="text-gray-600 pt-4">{qualification.title}</h4>
                  <p className="pt-4 font-extralight">{qualification.date}</p>
                </div>
              </div>
            </StyledProfileCrd>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Qualification;
