/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import portrait from "../assets/portrait.jpg";

const Hero = () => {
  const { t } = useTranslation("common");
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [t("hero.role1"), t("hero.role2"), t("hero.role3")];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section
      id="hero"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full"
      >
        <div className="text-center lg:text-left">
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary"
          >
            {t("hero.name")}
          </motion.h1>
          <motion.div
            variants={item}
            className="mt-4 text-2xl md:text-3xl font-semibold flex items-center justify-center lg:justify-start gap-3"
          >
            <span className="text-text-secondary">{t("hero.ima")}</span>
            <span className="text-primary h-10 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100%" }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="inline-block"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>
          <motion.p
            variants={item}
            className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-text-secondary leading-relaxed"
          >
            {t("hero.intro2")} {t("hero.intro3")} {t("hero.intro4")}
          </motion.p>
          <motion.div
            variants={item}
            className="mt-8 flex justify-center lg:justify-start gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-105"
            >
              {t("contact.title")}
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-gray-200 text-text-primary font-semibold rounded-lg hover:bg-gray-300 transition-colors"
            >
              {t("projects.view")}
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="flex justify-center">
          <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
            <div
              className="absolute inset-0 bg-linear-to-br from-primary to-secondary rounded-full"
              style={{ filter: "blur(30px)", opacity: 0.6 }}
            ></div>
            <div
              className="w-full h-full rounded-full overflow-hidden shadow-2xl"
              style={{
                clipPath: "url(#blob-mask)",
              }}
            >
              <img
                src={portrait}
                alt={t("hero.name")}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <svg className="absolute w-0 h-0">
        <defs>
          <clipPath id="blob-mask" clipPathUnits="objectBoundingBox">
            <path d="M0.83,0.618 C0.814,0.763,0.66,0.825,0.531,0.852 C0.323,0.9,0.23,0.73,0.116,0.641 C0.002,0.552,-0.024,0.407,0.024,0.27 C0.071,0.133,0.21,0.035,0.362,0.015 C0.514,-0.005,0.54,0.098,0.67,0.165 C0.78,0.222,0.849,0.443,0.83,0.618"></path>
          </clipPath>
        </defs>
      </svg>
    </section>
  );
};

export default Hero;
