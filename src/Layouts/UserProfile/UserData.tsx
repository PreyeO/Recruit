import {
  RiReactjsFill,
  RiVuejsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiAngularjsFill,
  RiCodeBoxFill,
} from "react-icons/ri";
import { AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { BsBootstrap } from "react-icons/bs";

export const datas = [
  {
    id: 1,
    skills: [
      { title: "REACT", icon: <RiReactjsFill /> },
      { title: "VUE3", icon: <RiVuejsFill /> },
      { title: "CSS", icon: <RiCss3Fill /> },
      { title: "Angular", icon: <RiAngularjsFill /> },
      { title: "HTML5", icon: <RiHtml5Fill /> },
    ],
    tools: [
      { title: "Coder Box", icon: <RiCodeBoxFill /> },
      { title: "GitLab", icon: <AiFillGitlab /> },
      { title: "GitHub", icon: <AiFillGithub /> },
      { title: "Bootstrap", icon: <BsBootstrap /> },
    ],
  },
];
