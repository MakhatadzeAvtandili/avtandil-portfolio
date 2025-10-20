import React from "react";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-labelledby="footerTitle">
      <div className={`container ${styles.container}`}>
        <h2 id="footerTitle" className="sr-only">
          Footer
        </h2>

        <div className={styles.footerGrid}>
          {/* Brand / Tagline */}
          <div className={styles.colBrand}>
            <div className={styles.brandName}>{t("name")}</div>
            <p className={styles.tagline}>
              {t(
                "footer_tagline",
                "Modern Front-End engineering with a design-first mindset."
              )}
            </p>
          </div>

          {/* Quick Links */}
          <nav
            className={styles.colLinks}
            aria-label={t("footer_links", "Quick links")}
          >
            <h3 className={styles.colTitle}>
              {t("footer_links", "Quick links")}
            </h3>
            <ul className={styles.linkList}>
              <li>
                <ScrollLink to="hero" spy smooth offset={-80} duration={500}>
                  {t("nav_home")}
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="about" spy smooth offset={-80} duration={500}>
                  {t("nav_about")}
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="projects"
                  spy
                  smooth
                  offset={-80}
                  duration={500}
                >
                  {t("nav_projects")}
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="contact" spy smooth offset={-80} duration={500}>
                  {t("nav_contact")}
                </ScrollLink>
              </li>
            </ul>
          </nav>

          {/* Contact + Social */}
          <div className={styles.colContact}>
            <h3 className={styles.colTitle}>
              {t("contact_info_title", "Contact")}
            </h3>
            <ul className={styles.contactList}>
              <li>
                <a href="mailto:email@example.com">email@example.com</a>
              </li>
              <li>
                <a href="tel:+995555123456">+995 555 123 456</a>
              </li>
              <li className={styles.muted}>თბილისი, საქართველო</li>
            </ul>

            <ul
              className={styles.socialList}
              aria-label={t("footer_social", "Social")}
            >
              <li>
                <a href="#" aria-label="GitHub" className={styles.socialBtn}>
                  <FaGithub aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn" className={styles.socialBtn}>
                  <FaLinkedin aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Twitter / X"
                  className={styles.socialBtn}
                >
                  <FaTwitter aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="YouTube" className={styles.socialBtn}>
                  <FaYoutube aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copy}>
            © {year} {t("name")} · {t("footer_text")}
          </p>

          <ScrollLink
            to="hero"
            spy
            smooth
            offset={-80}
            duration={500}
            className={styles.toTop}
            aria-label={t("footer_back_to_top", "Back to top")}
          >
            ↑ {t("footer_back_to_top", "Top")}
          </ScrollLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
