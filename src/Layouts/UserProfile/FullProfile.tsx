import Qualification from "./Qualification";
import Reviews from "./Reviews";
import Works from "./Works";

const FullProfile = () => {
  return (
    <section>
      <h1>Welcome to Full Profile</h1>
      <Qualification />
      <Reviews />
      <Works />
    </section>
  );
};

export default FullProfile;
