import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "../styles.css";

function View() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`view ${theme}`}>
      <h1>Hello World </h1>
      <p>Welcome to the Theme Toggler App</p>
    </div>
  );
}

export default View;
