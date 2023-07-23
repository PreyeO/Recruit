import {
  RiReactjsFill,
  RiVuejsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiAngularjsFill,
  RiCodeBoxFill,
  RiGoogleFill,
  RiFacebookFill,
  RiMicrosoftFill,
} from "react-icons/ri";
import { AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { BsBootstrap } from "react-icons/bs";

export const datas = [
  {
    id: 1,
    skills: [
      { title: "REACT", icon: <RiReactjsFill size={20} /> },
      { title: "VUE3", icon: <RiVuejsFill size={20} /> },
      { title: "CSS", icon: <RiCss3Fill size={20} /> },
      { title: "Angular", icon: <RiAngularjsFill size={20} /> },
      { title: "HTML5", icon: <RiHtml5Fill size={20} /> },
    ],
    tools: [
      { title: "Coder Box", icon: <RiCodeBoxFill size={20} /> },
      { title: "GitLab", icon: <AiFillGitlab size={20} /> },
      { title: "GitHub", icon: <AiFillGithub size={20} /> },
      { title: "Bootstrap", icon: <BsBootstrap size={20} /> },
    ],

    experiences: [
      {
        title: "Fullstack Dev",
        icon: <RiGoogleFill size={25} />,
        company: "Google",
      },
      {
        title: "Frontend Dev",
        icon: <RiFacebookFill size={25} />,
        company: "Facebook Meta",
      },
      {
        title: "Software Intern",
        icon: <RiMicrosoftFill size={25} />,
        company: "Microsoft",
      },
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

export const works = [
  {
    id: 1,
    title: "Care Finder",
    description: "This app is used to locate hospitals in a region.",
  },
  {
    id: 2,
    title: "Baby-Cry translator",
    description: "This app transcribes babies cries.",
  },
  {
    id: 3,
    title: "Chatter",
    description:
      "This is a social media platform for writters to share their works.",
  },
  {
    id: 4,
    title: "Fast Pay",
    description: "This is a payment platform.",
  },
  {
    id: 5,
    title: "Ready2Mingle",
    description: "This is a dating site.",
  },
  {
    id: 6,
    title: "Blossom Academy",
    description: "This is an online learning platform for kids.",
  },
];
