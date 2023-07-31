import { FC } from "react";
import Hero from "./Hero";
import { ProfileContainer } from "../../Components/Styles/General/ProfileContainer.styled";
import Companies from "./Companies";
import JobAds from "./JobAds";
import Projects from "./Projects";

// interface Props {
// }

const Landing: FC = () => {
  return <ProfileContainer>
    <Hero />
    <Companies />
    <JobAds />
    <Projects />
  </ProfileContainer>;
};

export default Landing;
