import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6">

        <h2 className="text-2xl font-bold text-cyan-400">
          Arayasilassie Samuel
        </h2>

        <p className="mt-2 text-center text-gray-400">
          Civil Engineer | Full Stack Developer
        </p>

        {/* Social Links */}
        <div className="mt-6 flex gap-6 text-2xl">
          <a
            href="https://github.com/arayasilassie3-blink"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/Arayasilassie"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:arayasilassie3@gmail.com"
            className="transition hover:text-cyan-400"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="mt-8 h-px w-full bg-slate-700"></div>

        <p className="mt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Arayasilassie Samuel.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;