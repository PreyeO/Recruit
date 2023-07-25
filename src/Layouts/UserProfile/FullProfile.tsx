import Qualification from "./Qualification";
import Reviews from "./Reviews";
import UserProficiencies from "./UserProficiencies";
import Works from "./Works";
import ProfileNav from "./ProfileNav";

const FullProfile = () => {
  const links = [<Works />, <Qualification />, <Reviews />];

  return (
    <section className="flex lg:gap-20 xs:gap-0">
      <aside className="xs:basis-1/5 lg:basis-0">
        <UserProficiencies />
      </aside>
      <div className="lg:basis-4/5 xs:basis-0">
        <ProfileNav links={links} />
      </div>
    </section>
  );
};

export default FullProfile;
