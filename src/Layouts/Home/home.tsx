import { FC } from "react";
import Hero from "./Hero";
import { ProfileContainer } from "../../Components/Styles/General/ProfileContainer.styled";
import Companies from "./Companies";
import JobAds from "./JobAds";
import Projects from "./Projects";
import JobCategories from "./JobCategories";
import Advert from "./Advert";
import Testimonial from "./Testimonial";

// interface Props {
// }

const Home: FC = () => {
  return (
    <ProfileContainer>
      <Hero />
      <Companies />
      <JobAds />
      <Projects />
      <JobCategories />
      <Advert />
      <Testimonial />
    </ProfileContainer>
  );
};

export default Home;
