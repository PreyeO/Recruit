import { StyledAuthButtton } from "../../Components/Styles/Buttons/AuthButton.styled";
import ProjectCard from "./ProjectCard";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="my-24 flex flex-col">
      <h2 className="text-5xl font-bold pb-10">Featured Projects</h2>
      <div className="flex gap-5 flex-wrap">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <StyledAuthButtton width="230px" height="60px" className="mt-10 self-center">
        <p className="text-2xl font-bold">See More</p>
      </StyledAuthButtton>
    </div>
  );
};

export default Projects;
