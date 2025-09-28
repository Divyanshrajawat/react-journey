import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        background: darkMode ? "#333" : "#eee",
        color: darkMode ? "#fff" : "#000",
        padding: "10px",
      }}
    >
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </nav>
  );
};

export default Navbar;
