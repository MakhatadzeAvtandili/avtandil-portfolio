import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>{t("footer_text")}</p>
      </div>
    </footer>
  );
};

export default Footer;
