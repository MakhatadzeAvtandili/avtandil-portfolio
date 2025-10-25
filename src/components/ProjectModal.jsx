/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ProjectModal = ({ project, onClose }) => {
  const { t, i18n } = useTranslation("common");
  const modalRef = useRef(null);

  const title = i18n.language === "ka" ? project.title_ka : project.title_en;
  const description =
    i18n.language === "ka" ? project.description_ka : project.description_en;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 25 },
    },
    exit: { opacity: 0, scale: 0.9, y: 50 },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 z-100 flex items-center justify-center p-4"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${project.id}`}
    >
      <motion.div
        ref={modalRef}
        className="bg-surface rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-64 md:h-80 rounded-t-xl overflow-hidden">
          <img
            src={project.img}
            alt={title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/50 hover:bg-white text-text-primary rounded-full p-2 transition-colors"
            aria-label="Close project details"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-8 overflow-y-auto">
          <h2
            id={`modal-title-${project.id}`}
            className="text-3xl font-bold text-text-primary"
          >
            {title}
          </h2>
          <div className="flex flex-wrap gap-2 my-4">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-text-secondary text-lg leading-relaxed">
            {description}
          </p>
        </div>
        <div className="p-8 border-t border-border mt-auto flex items-center gap-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-primary hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
          >
            {t("projects.demo")}
          </a>
          <a
            href={project.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-secondary hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
          >
            {t("projects.buyNow")}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
