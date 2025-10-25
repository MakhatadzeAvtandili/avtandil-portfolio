/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ProjectCard = ({ project, onOpen }) => {
  const { i18n } = useTranslation();
  const title = i18n.language === "ka" ? project.title_ka : project.title_en;
  const { t } = useTranslation("common");

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 0.8, bounce: 0.4 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
      onClick={onOpen}
      className="bg-surface rounded-xl overflow-hidden shadow-sm border border-border cursor-pointer group"
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={project.img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-text-primary">{title}</h3>
        <p className="mt-2 text-text-secondary text-sm">{project.category}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <span className="text-primary font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {t("projects.view")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
