import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import styles from "./About.module.css";

const About = () => {
  const { t } = useTranslation();

  const highlights = [
    { value: "6+", label: t("about_highlight_experience", "Years experience") },
    {
      value: "80+",
      label: t("about_highlight_projects", "Projects completed"),
    },
    { value: "30+", label: t("about_highlight_clients", "Happy clients") },
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "Sass",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "Node.js",
    "REST",
    "GraphQL",
    "Webpack",
    "Vite",
    "Jest",
    "Cypress",
    "Git",
    "Figma",
    "Responsive UI",
    "Accessibility",
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.aboutContainer}`}>
        {/* Intro / Bio */}
        <div className={styles.introCard}>
          <h2 className={styles.sectionTitle}>{t("about_title")}</h2>
          <p className={styles.lead}>{t("about_bio")}</p>

          <div className={styles.ctaRow}>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className={styles.primaryBtn}
            >
              {t("about_cta_contact", "Contact me")}
            </Link>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ghostBtn}
              aria-label={t("about_cta_cv", "Download CV")}
            >
              {t("about_cta_cv", "Download CV")}
            </a>
          </div>
        </div>

        {/* Highlights + Skills */}
        <aside className={styles.sidePanel}>
          <ul className={styles.statsList}>
            {highlights.map((h, i) => (
              <li className={styles.statItem} key={i}>
                <span className={styles.statValue}>{h.value}</span>
                <span className={styles.statLabel}>{h.label}</span>
              </li>
            ))}
          </ul>

          <div className={styles.skillsBlock}>
            <h3 className={styles.blockTitle}>
              {t("about_skills_title", "Core Skills")}
            </h3>
            <ul className={styles.skillsList}>
              {skills.map((s) => (
                <li className={styles.skillChip} key={s}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Timeline */}
        <div className={styles.timelineCard}>
          <h3 className={styles.blockTitle}>
            {t("about_timeline_title", "Experience")}
          </h3>
          <ol className={styles.timelineList}>
            <li className={styles.timelineItem}>
              <span className={styles.tYear}>2025</span>
              <div className={styles.tContent}>
                <h4>
                  {" "}
                  {t("about_timeline_role1", "Senior Front-End Engineer")}{" "}
                </h4>
                <p>
                  {t(
                    "about_timeline_desc1",
                    "Led React + Next.js delivery for complex SPAs; improved performance, DX and accessibility."
                  )}
                </p>
              </div>
            </li>
            <li className={styles.timelineItem}>
              <span className={styles.tYear}>2023</span>
              <div className={styles.tContent}>
                <h4> {t("about_timeline_role2", "Front-End Developer")} </h4>
                <p>
                  {t(
                    "about_timeline_desc2",
                    "Built design systems, modular UI kits, and CI-ready front-end pipelines."
                  )}
                </p>
              </div>
            </li>
            <li className={styles.timelineItem}>
              <span className={styles.tYear}>2021</span>
              <div className={styles.tContent}>
                <h4> {t("about_timeline_role3", "Junior Front-End")} </h4>
                <p>
                  {t(
                    "about_timeline_desc3",
                    "Shipped responsive websites with focus on pixel-perfect and maintainable CSS."
                  )}
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;
