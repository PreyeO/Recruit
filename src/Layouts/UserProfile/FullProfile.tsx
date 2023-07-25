import Qualification from "./Qualification";
import Reviews from "./Reviews";
import UserProficiencies from "./UserProficiencies";
import Works from "./Works";

const FullProfile = () => {
  return (
    <section>
      <Qualification />
      <Reviews />
      <Works />
      <aside>
        <UserProficiencies />
      </aside>
    </section>
  );
};

export default FullProfile;
