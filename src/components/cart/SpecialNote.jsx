import { FiEdit3 } from "react-icons/fi";

export default function SpecialNote({ note, setNote }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-10 h-10 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
          <FiEdit3 />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Special instructions
          </h3>
          <p className="text-sm text-gray-500">
            Less spicy, no onion, extra cheese...
          </p>
        </div>
      </div>

      <textarea
        rows={4}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add your cooking or delivery instructions here..."
        className="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
      />
    </div>
  );
}