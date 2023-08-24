import {
  RiReactjsFill,
  RiVuejsFill,
  RiAngularjsFill,
  RiCodeBoxFill,
} from "react-icons/ri";
import { AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { BsFacebook, BsMicrosoft, BsBriefcase } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { LuGraduationCap } from "react-icons/lu";
import { FaRegComments } from "react-icons/fa";

export const datas = [
  {
    id: 1,
    skills: [
      { title: "REACT", icon: <RiReactjsFill size={20} /> },
      { title: "VUE3", icon: <RiVuejsFill size={20} /> },
      { title: "Angular", icon: <RiAngularjsFill size={20} /> },
    ],
    tools: [
      { title: "Coder Box", icon: <RiCodeBoxFill size={20} /> },
      { title: "GitLab", icon: <AiFillGitlab size={20} /> },
      { title: "GitHub", icon: <AiFillGithub size={20} /> },
    ],

    experiences: [
      {
        title: "Fullstack Dev",
        icon: <FcGoogle size={30} />,
        company: "Google",
      },
      {
        title: "Frontend Dev",
        icon: <BsFacebook size={30} />,
        company: "Facebook Meta",
      },
      {
        title: "Software Intern",
        icon: <BsMicrosoft size={30} />,
        company: "Microsoft",
      },
    ],

    schedules: [
      {
        title: "Full-time",
      },
      {
        title: "Part-Time",
      },
      {
        title: "Contract",
      },
      {
        title: "Freelance",
      },
      {
        title: "Internship",
      },
      {
        title: "Aprenticeship",
      },
    ],
    locations: [
      {
        title: "On-site",
      },
      {
        title: "Hybrid",
      },
      {
        title: "Remote",
      },
      {
        title: "Anywhere",
      },
    ],
    joblevels: [
      {
        title: "Entry Level",
      },
      {
        title: "Junior Level",
      },
      {
        title: "Mid Level",
      },
      {
        title: "Senior Level",
      },
      {
        title: "Director ",
      },
      {
        title: "VP or above",
      },
    ],
  },
];

export const navWER = [
  { id: "1", name: "Works", icon: <BsBriefcase size={24} /> },
  { id: "2", name: "Education", icon: <LuGraduationCap size={28} /> },
  { id: "3", name: "Reviews", icon: <FaRegComments size={28} /> },
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
    date: "Sep 2018-2023",
  },
  {
    id: 2,
    name: "Jobberman Soft-Skill Trainning",
    title: "Jobberman Nigeria",
    date: "Issued Sep 2022",
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

export const jobs = [
  {
    id: 1,
    category: "Design",
    title: "UI/UX Designer",
    date: "2 days ago",
    company: "InVision New York(Remote)",
    requirements:
      "Invision is seeking a highly skilled and motivated Project Manager to join our dynamic team. As a Project Manager, you will be responsible for overseeing and delivering various projects within our organization.",
  },
  {
    id: 2,
    category: "Admin",
    title: "Executive Assistant",
    date: "3 days ago",
    company: "InVision New York(Remote)",
    requirements:
      "Invision is seeking a highly skilled and motivated Project Manager to join our dynamic team. As a Project Manager, you will be responsible for overseeing and delivering various projects within our organization.",
  },
  {
    id: 3,
    category: "Developer",
    title: "Frontend Developer",
    date: "5 days ago",
    company: "InVision New York(Remote)",
    requirements:
      "Invision is seeking a highly skilled and motivated Project Manager to join our dynamic team. As a Project Manager, you will be responsible for overseeing and delivering various projects within our organization.",
  },

  {
    id: 4,
    category: "Sales",
    title: "Telemarketer",
    date: "7 days ago",
    company: "InVision New York(Remote)",
    requirements:
      "Invision is seeking a highly skilled and motivated Project Manager to join our dynamic team. As a Project Manager, you will be responsible for overseeing and delivering various projects within our organization.",
  },
];
