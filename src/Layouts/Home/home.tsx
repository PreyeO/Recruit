import { FC } from "react";
import Hero from "./Hero";
import { ProfileContainer } from "../../Components/Styles/General/ProfileContainer.styled";
import Companies from "./Companies";
import JobAds from "./JobAds";
import Projects from "./Projects";
import JobCategories from "./JobCategories";
import MoreInfo from "./MoreInfo";

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
      <MoreInfo />
    </ProfileContainer>
  );
};

export default Home;
