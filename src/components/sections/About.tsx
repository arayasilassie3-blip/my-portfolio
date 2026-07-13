import { motion } from "framer-motion";
import {
  FaCode,
  FaRoad,
  FaCalculator,
  FaDraftingCompass,
} from "react-icons/fa";

import SectionTitle from "../ui/SectionTitle";

const About = () => {
  const cards = [
    {
      icon: <FaRoad />,
      title: "Civil Engineering",
      description:
        "Road design, quantity surveying, construction supervision, and engineering consulting.",
    },
    {
      icon: <FaCode />,
      title: "Software Development",
      description:
        "React, TypeScript, Node.js, PostgreSQL and modern web technologies.",
    },
    {
      icon: <FaDraftingCompass />,
      title: "Design Tools",
      description: "AutoCAD, Civil 3D, engineering drawings and modeling.",
    },
    {
      icon: <FaCalculator />,
      title: "Cost Estimation",
      description:
        "BOQ preparation, cost estimation, valuation and contract administration.",
    },
  ];

  return (
    <section
      id="about"
      className="
        bg-white
        py-24
        text-slate-900
        transition-colors
        duration-300
        dark:bg-slate-900
        dark:text-white
      "
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="About Me"
            subtitle="I am a Civil Engineer and Full Stack Developer from Ethiopia. I enjoy designing infrastructure, developing modern web applications, and solving practical engineering problems with technology."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  rounded-xl
                  bg-slate-100
                  p-6
                  text-slate-900
                  shadow
                  transition
                  duration-300
                  hover:-translate-y-2
                  hover:bg-slate-200
                  dark:bg-slate-800
                  dark:text-white
                  dark:hover:bg-slate-700
                "
              >
                <div className="mb-4 text-4xl text-cyan-400">{card.icon}</div>

                <h3 className="mb-3 text-2xl font-semibold">{card.title}</h3>

                <p className="text-gray-600 dark:text-gray-400">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
