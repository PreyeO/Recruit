import Footer from "../Footer/Footer";
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
      <Footer />
    </section>
  );
};

export default FullProfile;
