import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"; // Import ThemeContext

const Logo = () => {
  const { darkMode } = useContext(ThemeContext); // Get darkMode state

  return (
    <svg width="200" height="50" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Define Gradients Based on Theme */}
      <defs>
        <linearGradient id="hexGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={darkMode ? "#90caf9" : "#4CAF50"} /> 
          <stop offset="100%" stopColor={darkMode ? "#1e88e5" : "#2E7D32"} />
        </linearGradient>

        <linearGradient id="textGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={darkMode ? "#ddd" : "#333"} />
          <stop offset="100%" stopColor={darkMode ? "#bbb" : "#000"} />
        </linearGradient>
      </defs>

      {/* Hexagon Shape with Theme-based Gradient */}
      <polygon points="10,25 20,10 40,10 50,25 40,40 20,40" fill="url(#hexGradient)" />

      {/* Code Icon */}
      <text x="22" y="32" fontFamily="monospace" fontSize="16" fill={darkMode ? "#000" : "white"}>&lt;/&gt;</text>

      {/* SkillCraft Text with Theme-based Gradient */}
      <text x="60" y="35" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="url(#textGradient)">
        SkillCraft
      </text>
    </svg>
  );
};

export default Logo;
