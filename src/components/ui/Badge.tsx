import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="rounded bg-cyan-500 px-2 py-1 text-sm text-slate-900">
      {children}
    </span>
  );
};

export default Badge;