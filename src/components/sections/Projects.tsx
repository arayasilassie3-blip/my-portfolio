import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        bg-white 
        py-24 
        text-slate-900 
        transition-colors 
        duration-500
        dark:bg-slate-900 
        dark:text-white
      "
      aria-label="Projects section"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Projects"
            subtitle="Some of the applications and engineering projects I have worked on."
          />
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="
            grid 
            gap-8 
            sm:grid-cols-2 
            lg:grid-cols-3
          "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="
                overflow-hidden
                rounded-2xl
                shadow-lg
                transition-shadow
                duration-300
                hover:shadow-2xl
              "
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
