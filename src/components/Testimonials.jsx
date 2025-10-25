import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { testimonialsData } from "../data/testimonials";

const Testimonials = () => {
  const { t, i18n } = useTranslation("common");
  const [index, setIndex] = useState(0);

  const currentTestimonial = testimonialsData[index];

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 25 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.15 } },
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-text-primary">
            {t("testimonials.title")}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-lg text-text-secondary">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto mt-16 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full"
            >
              <div className="p-8 border border-border rounded-xl shadow-sm text-center">
                <p className="text-2xl font-medium text-text-primary italic">
                  &ldquo;
                  {i18n.language === "ka"
                    ? currentTestimonial.quote_ka
                    : currentTestimonial.quote_en}
                  &rdquo;
                </p>
                <div className="mt-8 flex flex-col items-center">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                  />
                  <h4 className="mt-4 text-xl font-bold text-text-primary">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-text-secondary">
                    {i18n.language === "ka"
                      ? currentTestimonial.title_ka
                      : currentTestimonial.title_en}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 bg-white border border-border rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 bg-white border border-border rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
