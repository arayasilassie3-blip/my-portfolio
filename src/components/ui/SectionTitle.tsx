

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>

      <div className="mx-auto mt-4 h-1 w-24 rounded bg-cyan-400"></div>

      {subtitle && (
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;