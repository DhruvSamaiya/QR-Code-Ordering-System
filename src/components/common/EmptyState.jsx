import { Link } from "react-router-dom";
import Button from "./Button";

export default function EmptyState({
  image,
  title,
  description,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl p-10 text-center border border-gray-100 dark:border-gray-800 shadow-sm">
      <img
        src={
          image ||
          "https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
        }
        alt={title}
        className="w-40 mx-auto mb-6 opacity-90"
      />

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h2>

      <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6 leading-relaxed">
        {description}
      </p>

      {buttonText && buttonLink && (
        <Link to={buttonLink}>
          <Button size="lg">{buttonText}</Button>
        </Link>
      )}
    </div>
  );
}