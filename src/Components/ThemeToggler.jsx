import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "../styles.css";

function ThemeToggler() {
  const { theme, themetoggler } = useContext(ThemeContext);

  return (
    <>
      <button className="toggle-button" onClick={themetoggler} type="button">
        Toggle to {theme === "light" ? "dark" : "light"} theme
      </button>
    </>
  );
}

export default ThemeToggler;
