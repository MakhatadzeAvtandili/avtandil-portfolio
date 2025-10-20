import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <h2>{t("about_title")}</h2>
        <div className={styles.aboutContent}>
          <p>{t("about_bio")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
