import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import styles from "./Hero.module.css";
import profilePic from "../../assets/profile-pic.jpg"; // ჩასვით თქვენი ფოტო assets ფოლდერში

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroContent}>
          <p className={styles.greeting}>{t("hero_greeting")}</p>
          <h1 className={styles.name}>{t("name")}</h1>
          <h2 className={styles.title}>{t("hero_title")}</h2>
          <p className={styles.description}>{t("hero_description")}</p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={styles.ctaButton}
          >
            {t("hero_button")}
          </Link>
        </div>
        <div className={styles.heroImage}>
          <img src={profilePic} alt={t("name")} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
