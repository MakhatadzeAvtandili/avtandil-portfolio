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
        <h2>{t("projects_title")}</h2>
        <div className={styles.projectsGrid}>
          {projectData.map((project) => (
            <a
              href={project.link}
              key={project.id}
              className={styles.projectCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.img}
                alt={`${t("project_card_title")} ${project.id}`}
              />
              <div className={styles.cardOverlay}>
                <h3>
                  {t("project_card_title")} {project.id}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
