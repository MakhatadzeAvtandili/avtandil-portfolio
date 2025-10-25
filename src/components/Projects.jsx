import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const categories = ["All", "Web App", "UI Kit", "Template"];

const Projects = () => {
  const { t } = useTranslation("common");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-text-primary">
            {t("projects.title")}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-text-secondary">
            {t("projects.desc")}
          </p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-4 my-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`relative px-5 py-2 font-semibold rounded-lg transition-colors ${
                activeFilter === cat
                  ? "text-white"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {activeFilter === cat && (
                <motion.div
                  layoutId="filter-active-pill"
                  className="absolute inset-0 bg-primary rounded-lg z-0"
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => openModal(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
