import Link from "next/link";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>LOGO</span>

      <nav className={styles.nav}>
        <Link href="/contacto" className={styles.link}>
          Contacto
        </Link>
        <Link href="/nosotras" className={styles.link}>
          Nosotras
        </Link>
      </nav>
    </header>
  );
};
