import { useMenu } from "../../hooks/useMenu";
import { FaBars, FaTimes } from "react-icons/fa";
import { useActiveSection } from "../../hooks/useActiveSection";
import ThemeToggle from "../ui/ThemeToggle";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];
const Navbar = () => {
  const { menuOpen, toggleMenu, closeMenu } = useMenu();
  const activeSection = useActiveSection();
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white text-slate-900 shadow-lg dark:bg-slate-900 dark:text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-cyan-400 transition hover:text-cyan-300"
        >
          Arayasilassie Samuel
        </a>

        {/* Desktop Menu */}

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`transition duration-300 ${
                  activeSection === item.id
                    ? "text-cyan-400 font-semibold"
                    : "hover:text-cyan-400"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <button
            onClick={toggleMenu}
            className="text-2xl text-slate-900 transition hover:text-cyan-400 dark:text-white md:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* <div
        className={`overflow-hidden bg-slate-800 transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={closeMenu}
                className={`block border-b border-slate-700 px-6 py-4 transition ${
                  activeSection === item.id
                    ? "bg-slate-700 text-cyan-400 font-semibold"
                    : "hover:bg-slate-700 hover:text-cyan-400"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div> */}
      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden 
  bg-white text-slate-700 
  dark:bg-slate-700 dark:text-white
  ${menuOpen ? "max-h-96" : "max-h-0"}`}
      >
        <ul className="flex flex-col">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={closeMenu}
                className={`block border-b px-6 py-4 transition
          border-slate-200 dark:border-slate-700
          ${
            activeSection === item.id
              ? "bg-slate-100 text-cyan-500 font-semibold dark:bg-slate-800 dark:text-cyan-400"
              : "hover:bg-slate-100 hover:text-cyan-500 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
          }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
