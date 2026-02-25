"use client";

import * as React from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// @ts-expect-error React 19 types issue with createContext
const ThemeContext = React.createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => { },
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>("dark");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  React.useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev: Theme) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  // @ts-expect-error React 19 types issue with useContext
  return React.useContext(ThemeContext);
}
