import styles from "./Settings.module.css";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  function handleChange(e) {
    toggleTheme(e.target.value)
  }

  return (
    <main className={styles.settings}>
      <h1>Settings</h1>
      <div className="borderTop"></div>
      <section className={styles.sectionSettings}>
        <h2>Appearance</h2>
        <label htmlFor="theme">Theme:</label>
        <select id="theme" value={theme} onChange={handleChange}>
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
        </select>
      </section>
    </main>
  );
}

export default Settings;
