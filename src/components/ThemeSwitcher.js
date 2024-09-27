// src/components/ThemeSwitcher.js
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-button" onClick={toggleTheme}>
      {theme === "light" ? "🌒" : "☀️"}
    </button>
  );
};

export default ThemeSwitcher;
