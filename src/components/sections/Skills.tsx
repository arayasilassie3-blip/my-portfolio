import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import SectionTitle from "../ui/SectionTitle";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-white py-24 text-slate-900 dark:bg-slate-900 dark:text-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="My Skills"
          subtitle="Technologies and engineering tools I use regularly."
        />

        <div className="space-y-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl bg-slate-100 p-5 shadow transition hover:-translate-y-1 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
            >
              <div className="mb-3 flex justify-between">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-cyan-500 font-medium">
                  {skill.level}%
                </span>
              </div>

              <div className="h-3 rounded-full bg-slate-300 dark:bg-slate-700">
                <motion.div
                  className="h-3 rounded-full bg-cyan-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
