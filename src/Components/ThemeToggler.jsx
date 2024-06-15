import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "../styles.css";

function ThemeToggler() {
  const { theme, themetoggler } = useContext(ThemeContext);

  return (
    <label htmlFor="theme" className="theme">
      <span className="theme__toggle-wrap">
        <input
          id="theme"
          className="theme__toggle"
          type="checkbox"
          role="switch"
          name="theme"
          onChange={themetoggler}
          checked={theme === "dark"}
        />
        <span className="theme__fill"></span>
        <span className="theme__icon">
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
        </span>
      </span>
    </label>
  );
}

export default ThemeToggler;
