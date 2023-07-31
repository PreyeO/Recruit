import { FaReact } from "react-icons/fa";
import Avatar from "../../assets/avatar.png";
import ProjectImg from "../../assets/Project.svg";
import { StyledAuthButtton } from "../../Components/Styles/Buttons/AuthButton.styled";
import LandingBtn from "../../Components/UI/Buttons/LandingBtn";

type Props = {};

const ProjectCard = (props: Props) => {
  return (
    <div className="px-5 py-6 border border-[#b4bfc7] border-solid rounded-2xl w-80">
      <div className="flex gap-2 items-center">
        <img src={Avatar} alt="avatar" className="w-8" />
        <p className="text-xl">Nguyen, Shane</p>
      </div>
      <div className="py-7">
        <img src={ProjectImg} alt="project" className="w-full" />
      </div>
      <StyledAuthButtton
        width="174px"
        height="41px"
        className="flex items-center justify-center gap-1"
      >
        <FaReact size={20} />
        <p className="text-xl font-bold">React Project</p>
      </StyledAuthButtton>
      <p className="py-7 text-2xl font-bold">
        {" "}
        Project Frontend - The best place for travels
      </p>
      <LandingBtn label="View More" />
    </div>
  );
};

export default ProjectCard;
