import profile from "../../assets/images/profile.jpg";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { useTheme } from "../../hooks/useTheme";

const Hero = () => {
  const { theme } = useTheme();

  const darkMode = theme === "dark";

  return (
    <section
      id="home"
      className={`flex min-h-screen items-center pt-20 transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-slate-900"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span
            className={`rounded-full border border-cyan-500 px-4 py-1 text-sm ${
              darkMode ? "text-cyan-400" : "text-cyan-600"
            }`}
          >
            Welcome to my portfolio
          </span>

          <p className="mb-3 mt-5 text-lg text-cyan-400">👋 Hello, I'm</p>

          <h1 className="mb-4 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl">
            Arayasilassie Samuel
          </h1>

          <h2
            className={`mb-6 text-2xl md:text-4xl ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Civil Engineer & Full Stack Developer
          </h2>

          <p
            className={`mb-8 max-w-xl text-lg leading-8 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            I design infrastructure and build modern web applications using
            React, TypeScript, Node.js, and PostgreSQL.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="#projects">View Projects</Button>

            <Button href="/Arayasilassie_Samuel_CV.pdf" variant="secondary">
              Download CV
            </Button>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.img
            src={profile}
            alt="Arayasilassie Samuel"
            className="h-48 w-48 rounded-full border-4 border-cyan-500 object-cover shadow-2xl md:h-64 md:w-64 lg:h-72 lg:w-72"
            whileHover={{
              scale: 1.05,
              rotate: 2,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
