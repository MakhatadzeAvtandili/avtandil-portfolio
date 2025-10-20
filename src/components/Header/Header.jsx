import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import styles from "./Header.module.css";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo} aria-label={t("name")}>
          {t("name")}
        </div>

        <nav className={styles.nav} aria-label="Primary">
          <ul>
            <li>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass={styles.active}
              >
                {t("nav_home")}
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass={styles.active}
              >
                {t("nav_about")}
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass={styles.active}
              >
                {t("nav_projects")}
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass={styles.active}
              >
                {t("nav_contact")}
              </Link>
            </li>
          </ul>
        </nav>

        <div
          className={styles.langSwitcher}
          role="group"
          aria-label="Language switcher"
        >
          <button
            onClick={() => changeLanguage("ka")}
            disabled={i18n.language === "ka"}
            aria-pressed={i18n.language === "ka"}
          >
            KA
          </button>
          <span className={styles.divider} aria-hidden="true">
            |
          </span>
          <button
            onClick={() => changeLanguage("en")}
            disabled={i18n.language === "en"}
            aria-pressed={i18n.language === "en"}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
