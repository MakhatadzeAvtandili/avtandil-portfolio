import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";

const Success = () => {
  const { t } = useTranslation("common");

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="grow flex items-center justify-center text-center px-4 bg-white"
    >
      <SEO
        title={t("seo.success_title")}
        description={t("seo.success_description")}
      />
      <div>
        <div className="p-8 bg-white rounded-xl max-w-lg mx-auto">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="text-7xl mb-6"
          >
            🎉
          </motion.div>
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            {t("success.title")}
          </h1>
          <p className="text-lg text-text-secondary mb-8">
            {t("success.message")}
          </p>
          <Link
            to="/"
            className="inline-block bg-primary hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105"
          >
            {t("success.backToHome")}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Success;
