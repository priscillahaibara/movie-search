import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Set dark theme" : "Set light theme"}
      </button>
    </div>
  );
}

function AppContent() {}
