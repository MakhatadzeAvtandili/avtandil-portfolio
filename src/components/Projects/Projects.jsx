import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Projects.module.css";
// პროექტების ფოტოები
import projImg1 from "../../assets/project1.jpg";
import projImg2 from "../../assets/project2.jpg";
import projImg3 from "../../assets/project3.jpg";
import projImg4 from "../../assets/project4.jpg";
import projImg5 from "../../assets/project5.jpg";
import projImg6 from "../../assets/project6.jpg";
import projImg7 from "../../assets/project7.jpg";
import projImg8 from "../../assets/project8.jpg";

const Projects = () => {
  const { t } = useTranslation();

  const projectData = [
    { id: 1, img: projImg1, link: "#" },
    { id: 2, img: projImg2, link: "#" },
    { id: 3, img: projImg3, link: "#" },
    { id: 4, img: projImg4, link: "#" },
    { id: 5, img: projImg5, link: "#" },
    { id: 6, img: projImg6, link: "#" },
    { id: 7, img: projImg7, link: "#" },
    { id: 8, img: projImg8, link: "#" },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className={styles.sectionTitle}>{t("projects_title")}</h2>

        <div className={styles.projectsGrid}>
          {projectData.map((project) => (
            <div className={styles.projectCard} key={project.id}>
              {/* სურათი + overlay სწრაფი ნახვისათვის */}
              <a
                href={project.link}
                className={styles.imageWrap}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t("project_card_title")} ${project.id}`}
              >
                <img
                  src={project.img}
                  alt={`${t("project_card_title")} ${project.id}`}
                  loading="lazy"
                />
                <div className={styles.cardOverlay}>
                  <span className={styles.overlayTitle}>
                    {t("project_card_title")} {project.id}
                  </span>
                </div>
              </a>

              {/* ქარდის ფუტერი — პატარა სახელი + View ღილაკი */}
              <div className={styles.cardFooter}>
                <div className={styles.cardName}>
                  {t("project_card_title")} {project.id}
                </div>
                <a
                  href={project.link}
                  className={styles.viewBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("projects_view", "View")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
