import { StyledProfileCrd } from "../../Components/Styles/Cards/ProfileCard.styled";
import { qualifications } from "./UserData";
import Schoollogo from "../../assets/schllogo.svg";

const Qualification = () => {
  return (
    <section className="mt-6">
      <ul>
        {qualifications.map((qualification) => (
          <li key={qualification.id} className="mb-4">
            <StyledProfileCrd>
              <div className="flex gap-10">
                <div>
                  <figure style={{ width: "5rem" }}>
                    <img src={Schoollogo} alt="school logo" />
                  </figure>
                </div>
                <div>
                  <h3 className="font-bold text-2xl">{qualification.name}</h3>
                  <h4 className="text-gray-600 text-xl pt-4">
                    {qualification.title}
                  </h4>
                  <p className="pt-4 text-sm font-extralight">
                    {qualification.date}
                  </p>
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
