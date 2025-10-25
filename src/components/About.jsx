/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const DiscoverIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const DesignIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20h9"></path>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
  </svg>
);

const DevelopIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const DeployIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const About = () => {
  const { t } = useTranslation("common");

  const workflowSteps = [
    {
      icon: <DiscoverIcon />,
      title: t("step.title1"),
      description: t("step.desc1"),
    },
    {
      icon: <DesignIcon />,
      title: t("step.title2"),
      description: t("step.desc2"),
    },
    {
      icon: <DevelopIcon />,
      title: t("step.title3"),
      description: t("step.desc3"),
    },
    {
      icon: <DeployIcon />,
      title: t("step.title4"),
      description: t("step.desc4"),
    },
  ];

  return (
    <section id="workflow" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-text-primary">
            {t("about.title")}
          </h2>
          <p className="mt-4 max-w-6xl mx-auto text-center text-lg text-text-secondary">
            {t("about.bio")}
          </p>
          <h3 className="text-4xl md:text-4xl font-bold text-center my-8 text-text-primary">
            {t("about.workflow")}
          </h3>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflowSteps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center p-8 border border-border rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-block p-4 bg-primary/10 text-primary rounded-full">
                {step.icon}
              </div>
              <h3 className="mt-6 text-xl font-bold text-text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-text-secondary">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
