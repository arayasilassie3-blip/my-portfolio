// import type { ReactNode } from "react";

// interface ButtonProps {
//   children: ReactNode;
//   variant?: "primary" | "secondary";
//   href?: string;
//   onClick?: () => void;
// }

// const Button = ({
//   children,
//   variant = "primary",
//   href,
//   onClick,
// }: ButtonProps) => {
//   const baseClasses =
//     "rounded-lg px-6 py-3 font-semibold transition duration-300";

//   const variants = {
//     primary:
//       "bg-cyan-500 text-slate-900 hover:bg-cyan-400",
//     secondary:
//       "border border-cyan-500 text-white hover:bg-cyan-500 hover:text-slate-900",
//   };

//   if (href) {
//     return (
//       <a
//         href={href}
//         className={`${baseClasses} ${variants[variant]}`}
//       >
//         {children}
//       </a>
//     );
//   }

//   return (
//     <button
//       onClick={onClick}
//       className={`${baseClasses} ${variants[variant]}`}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  href,
  variant = "primary",
}: ButtonProps) => {
  const styles =
    variant === "secondary"
      ? `
        border
        border-cyan-500
        text-cyan-600
        hover:bg-cyan-500
        hover:text-white
        dark:text-cyan-400
        dark:hover:text-white
      `
      : `
        bg-cyan-500
        text-white
        hover:bg-cyan-600
      `;

  return (
    <a
      href={href}
      className={`
        inline-block
        rounded-lg
        px-6
        py-3
        font-semibold
        transition
        duration-300
        ${styles}
      `}
    >
      {children}
    </a>
  );
};

export default Button;