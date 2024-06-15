import React from "react";
import { ThemeProvider } from "./Components/ThemeContext";
import ThemeToggler from "./Components/ThemeToggler";
import View from "./Components/View";
import "./styles.css";

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <View></View>
        <ThemeToggler />
      </div>
    </ThemeProvider>
  );
}

export default App;
