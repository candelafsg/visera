import styles from "./page.module.css";

export default function Home() {


  
  return (
    <div className={styles.page}>
      <div className={styles.intro}>
        <p className={styles.introP}>
          Visera es un estudio creativo independiente con la misión de aportar valor real y tangible a través <br/> de ideas frescas, diseños que conectan y campañas que impactan.
        </p>
          <p className={styles.introP}>
          Siempre en busca de una sensación similar al lujo, y un color parecido al brillo.
        </p>
          <p className={styles.introP}>
         Nuestra filosofía hace match con quienes se calientan bajo el sol, eligen vivir la vida en chanclas y, sobre todo, <br/> quienes se atreven a llevar visera.

        </p>

          <p className={styles.introP}>
          Somos un estudio creativo que nace para hacer brillar tu marca.
        </p>
      </div>

      <div className={styles.images}>
        <div className={styles.img}></div>
        <div className={styles.img}></div>
        <div className={styles.img}></div>
         <div className={styles.img}></div>
        <div className={styles.img}></div>
        <div className={styles.img}></div>
      </div>
    </div>
  );
}
