import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  SiChai,
  SiDocker,
  SiExpress,
  SiFlask,
  SiJest,
  SiMocha,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPytest,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";

import { Achievement5 } from "./components/achievements";
import { IResume } from "./types";

const summaries = [
  "With nearly one year of professional experience since graduating, I have been actively contributing to projects within my current company. During this time, I have gained valuable insights into designing and developing software solutions. My role involves collaboration with cross-functional teams, leading projects from inception to completion, and consistently delivering quality outcomes. From shaping technical blueprints to troubleshooting complex issues, I am committed to advancing my skills and pushing the boundaries of technology",
];

const skills = [
  {
    title: "TypeScript",
    icon: SiTypescript,
    color: "bg-blue-200",
  },
  {
    title: "Python",
    icon: SiPython,
    color: "bg-yellow-200",
  },
  {
    title: "Express",
    icon: SiExpress,
    color: "bg-gray-200",
  },
  {
    title: "React.js",
    icon: SiReact,
    color: "bg-sky-200",
  },
  {
    title: "Next.js",
    icon: SiNextdotjs,
    color: "bg-gray-200",
  },
  {
    title: "Nest.js",
    icon: SiNestjs,
    color: "bg-rose-200",
  },
  {
    title: "Flask",
    icon: SiFlask,
    color: "bg-sky-200",
  },
  {
    title: "Jest",
    icon: SiJest,
    color: "bg-red-200",
  },
  {
    title: "Mocha",
    icon: SiMocha,
    color: "bg-amber-200",
  },
  {
    title: "Chai",
    icon: SiChai,
    color: "bg-orange-200",
  },
  {
    title: "Pytest",
    icon: SiPytest,
    color: "bg-sky-200",
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
    color: "bg-green-200",
  },
  {
    title: "MySQL",
    icon: SiMysql,
    color: "bg-indigo-200",
  },
  {
    title: "Docker",
    icon: SiDocker,
    color: "bg-sky-200",
  },
];

const social = [
  {
    name: "GitHub",
    url: "https://github.com/mrahmanashiq",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mrahmanashiq/",
    icon: FaLinkedinIn,
  },
  {
    name: "X",
    url: "https://x.com/mrahmanashiq",
    icon: FaXTwitter,
  },
];

const experience = [
  {
    title: "Software Engineer",
    company: "Bit Mascot",
    companyWebsite: "https://www.bitmascot.com/",
    start: "2023 JUNE",
    end: "CURRENT",
    contributions: [
      "Collaborate with the product team to analyze opportunities and gaps in existing and new projects.",
      "Create technical specifications through in-depth research on product and architecture and performing spikes.",
      "Migrate existing services to the latest runtime and framework versions.",
      "Build public API endpoints, webhook events and resolve customer reported bugs.",
    ],
  },
];

const achievements = [Achievement5];

const educations = [
  {
    institution: "Daffodil International University",
    degree: "B.Sc. in Software Engineering",
    start: "2019",
    end: "2023",
    website: "https://diu.edu.bd",
    descriptionList: [
      {
        title: "Cumulative Grade Point Average",
        text: "3.82 / 4.00",
      },
      {
        title: "Credit Hours",
        text: "145 / 145",
      },
    ],
  },
];

const resume: IResume = {
  name: "Mizanur Rahman Ashiq",
  initials: "mra",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/Dhaka",
  about: "Software Engineer at Bit Mascot",
  avatarUrl: "https://avatars.githubusercontent.com/u/133495876?v=4",
  personalWebsiteUrl: "https://mrahmanashiq.github.io",
  summaries,
  skills,
  social,
  experience,
  achievements,
  educations,
};

export { resume };
