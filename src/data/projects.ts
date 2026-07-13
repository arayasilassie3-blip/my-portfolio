import portfolioImage from "../assets/images/my portfolio.png";
import taskImage from "../assets/images/task-manager.jpg";
import churchImage from "../assets/images/Bari Mariam Church.jpg";
import churchboqImage from "../assets/images/Debir Mariam Church.jpg";

import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "A modern responsive portfolio website built with React and TypeScript.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourname/portfolio",
    demo: "https://yourwebsite.com",
    image: portfolioImage,
  },

  {
    id: 2,
    title: "Task Manager App",
    description:
      "A full stack task management application with authentication.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/yourname/task-manager",
    demo: "",
    image: taskImage,
  },

  {
    id: 3,
    title: "Church Design and Build",
    description: "Bari Mariam Church is designed and built in North Shoa Zone.",
    technologies: ["Autocad", "Etabs"],
    github: "https://github.com/yourname/school-system",
    demo: "",
    image: churchImage,
  },
  {
    id: 4,
    title: "Church valuation",
    description:
      "Debir Mariam Church is Valuated based on the work in North Shoa Zone.",
    technologies: ["Websight"],
    github: "https://github",
    demo: "",
    image: churchboqImage,
  },
];
