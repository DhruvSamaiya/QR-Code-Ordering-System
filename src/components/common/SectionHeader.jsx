export default function SectionHeader({
  title,
  subtitle,
  action,
}) {
  return (
    <div className="flex items-end justify-between gap-4 mb-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>

        {subtitle && (
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div>{action}</div>}
    </div>
  );
}