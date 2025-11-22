import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Made by Priscilla Haibara</p>
      <address>
        <a href="mailto:megumi.ufrn@gmail.com">megumi.ufrn@gmail.com</a>
      </address>
    </footer>
  );
}

export default Footer;
