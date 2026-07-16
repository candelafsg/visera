import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
   

      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          Visera.
        </Link>
        <Link href="/servicios" className={styles.link}>
          Servicios
        </Link>
       
      </nav>
       <ThemeToggle />
    </header>
  );
};
