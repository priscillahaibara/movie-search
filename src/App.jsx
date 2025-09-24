import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme === "light" ? "white" : "black" }}>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Set dark theme" : "Set light theme"}
      </button>
    </div>
  );
}

function AppContent() {}
