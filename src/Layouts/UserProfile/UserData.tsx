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

export const reviews = [
  {
    id: 1,
    author: "John Doe",
    content:
      "I had the pleasure of working with Brooklyn on a software development project, and I am delighted to provide this review of their exceptional skills and contributions. As a highly talented and dedicated software developer, Brooklyn exceeded all expectations and played a pivotal role in the project's success",
  },
  {
    id: 2,
    author: "Jane Smith",
    content:
      "I had the pleasure of working with Brooklyn on a software development project, and I am delighted to provide this review of their exceptional skills and contributions. As a highly talented and dedicated software developer, Brooklyn exceeded all expectations and played a pivotal role in the project's success",
  },
];

export const qualifications = [
  {
    id: 1,
    name: "University of Ilorin",
    title: "Bachelor of Sciences - Mathematics",
    date: "2018-2023",
  },
  {
    id: 2,
    name: "Jobberman Soft-Skill Trainning",
    title: "Jobberman Nigeria",
    date: "issued sep 2022",
  },
];
