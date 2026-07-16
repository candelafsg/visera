"use client";

import { useTheme } from "./ThemeProvider";
import styles from "./themeToggle.module.css";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  // Mientras no sepamos el tema real (primer render en cliente), no pintamos
  // nada para no mostrar el estado equivocado un instante.
  if (!theme) {
    return <span className={styles.placeholder} />;
  }

  const isLight = theme === "light";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isLight}
      aria-label={isLight ? "Activar modo oscuro" : "Activar modo claro"}
      data-checked={isLight}
      className={styles.switch}
      onClick={toggleTheme}
    >
      <span className={styles.thumb} />
    </button>
  );
};
