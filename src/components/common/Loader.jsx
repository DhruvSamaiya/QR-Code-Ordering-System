import { motion } from "framer-motion";

export default function Loader({ text = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="relative w-16 h-16">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-4 border-orange-200 dark:border-orange-900"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-1 rounded-full border-4 border-transparent border-t-orange-500 border-r-orange-500"
        />
      </div>

      <p className="mt-4 text-gray-600 dark:text-gray-400 font-medium">
        {text}
      </p>
    </div>
  );
}