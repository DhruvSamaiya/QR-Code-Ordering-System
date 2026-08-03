import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  icon: Icon,
}) {
  const variants = {
    primary:
      "bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white",
    outline:
      "border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800",
    danger:
      "bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm rounded-xl",
    md: "px-5 py-3 text-sm rounded-2xl",
    lg: "px-6 py-4 text-base rounded-2xl",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={!disabled ? { y: -1 } : {}}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2
        font-semibold transition-all duration-200
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {Icon && <Icon size={18} />}
      {children}
    </motion.button>
  );
}