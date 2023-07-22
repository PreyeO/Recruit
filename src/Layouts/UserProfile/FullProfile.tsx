import Qualification from "./Qualification";
import Reviews from "./Reviews";
import UserProficiencies from "./UserProficiencies";
import Works from "./Works";

const FullProfile = () => {
  return (
    <section>
      <h1>Welcome to Full Profile</h1>
      <Qualification />
      <Reviews />
      <Works />
      <UserProficiencies />
    </section>
  );
};

export default FullProfile;
