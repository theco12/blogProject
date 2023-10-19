import { ReactNode, createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

interface ThemeProps {
  children: ReactNode;
}

export const ThemeContextProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState(window.localStorage.getItem("theme") || "light");
  window.localStorage.setItem("theme", theme === "light" ? "light" : "dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
