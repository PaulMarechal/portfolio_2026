import Image from "next/image";
import styles from "./page.module.css";
import Tags from "./components/Tags.js";

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Bonjour, je suis <span className={styles.highlight}>Paul Maréchal</span>
        </h1>
        <p className={styles.heroSubtitles}>
          Développeur web full-stack
        </p>
        <p className={styles.heroDescription}>
          Je crée des applications web modernes, performantes et accessibles avec React, Next.js et Node.js 
        </p>
        <Tags />
      </div>
      <div className={styles.heroButtons}>
        <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
          Voir mes projets
        </a>
        <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
          Me contacter
        </a>
      </div>
    </div>
  );
}
