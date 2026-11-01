import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("bibliotec-theme");
    return savedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("bibliotec-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
