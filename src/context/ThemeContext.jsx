import { createContext } from "react";
import useDarkMode from "../hooks/useDarkMode";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useDarkMode();

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}