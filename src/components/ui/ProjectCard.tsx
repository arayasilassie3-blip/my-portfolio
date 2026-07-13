// import type { Project } from "../../types/project";
// import Button from "./Button";
// import Badge from "./Badge";

// interface ProjectCardProps {
//   project: Project;
// }

// const ProjectCard = ({ project }: ProjectCardProps) => {
//   return (
//     <div
//       className="
// rounded-xl
// bg-slate-100
// shadow
// transition
// hover:-translate-y-2
// hover:bg-slate-200
// dark:bg-slate-800
// dark:hover:bg-slate-700
// "
//     >
//       <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-slate-700">
//         <img
//   src={project.image}
//   alt={project.title}
//   className="h-full w-full rounded-lg object-cover"
// />

//       </div>

//       <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>

//       <p className="mb-4 text-gray-400">{project.description}</p>

//       <div className="mb-6 flex flex-wrap gap-2">
//         {project.technologies.map((tech) => (
//           <Badge key={tech}>{tech}</Badge>
//         ))}
//       </div>

//       <div className="flex gap-4">
//         <Button href={project.github}>GitHub</Button>

//         <Button href={project.demo} variant="secondary">
//           Live Demo
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
import type { Project } from "../../types/project";
import Button from "./Button";
import Badge from "./Badge";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      className="
        overflow-hidden
        rounded-xl
        bg-slate-100
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        dark:bg-slate-800
      "
    >
      {/* Project Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3 text-2xl font-semibold text-slate-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mb-5 text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button href={project.github}>
            GitHub
          </Button>

          <Button
            href={project.demo}
            variant="secondary"
          >
            Live Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;