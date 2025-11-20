import styles from "./Logo.module.css";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/" className={styles.logo}>
      CineDB
    </NavLink>
  );
}

export default Logo;
