/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "🚀" },
  { name: "JavaScript", icon: "📜" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Framer Motion", icon: "🤸" },
  { name: "Node.js", icon: "🟢" },
  { name: "Figma", icon: "🎨" },
  { name: "Python", icon: "🐍" },
  { name: "Vite", icon: "⚡" },
  { name: "Git", icon: "🌿" },
  { name: "Docker", icon: "🐳" },
];

const Skills = () => {
  const { t } = useTranslation("common"); // შეცვალე namespace თუ სხვაგან გაქვს

  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-text-primary">
            {t("skills.title")}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-text-secondary">
            {t("skills.desc")}
          </p>
        </motion.div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="bg-white p-6 rounded-xl shadow-sm border border-border group-hover:shadow-lg transition-shadow text-5xl">
                  {skill.icon}
                </div>
                <p className="mt-3 font-semibold text-text-secondary">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
