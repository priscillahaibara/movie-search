import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <Link to="/">🎬 Movie Search</Link>
      <button onClick={toggleTheme}>
        <ion-icon
          name={theme === "light" ? "moon-outline" : "sunny-outline"}
        ></ion-icon>
      </button>
    </nav>
  );
}

export default NavBar;
