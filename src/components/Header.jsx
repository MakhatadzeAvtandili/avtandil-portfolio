import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = () => {
  const { t, i18n } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = ["hero", "workflow", "projects", "skills", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#workflow", label: t("header.about"), id: "workflow" },
    { href: "#projects", label: t("header.projects"), id: "projects" },
    { href: "#contact", label: t("header.contact"), id: "contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-text-primary"
          >
            {t("header.logo")}
            <span className="text-primary">.</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-lg font-medium text-text-secondary hover:text-primary transition-colors"
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="active-nav-link"
                    className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${
                  i18n.language === "en"
                    ? "bg-primary text-white"
                    : "text-text-secondary hover:bg-gray-100"
                }`}
              >
                {t("header.en")}
              </button>
              <button
                onClick={() => changeLanguage("ka")}
                className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${
                  i18n.language === "ka"
                    ? "bg-primary text-white"
                    : "text-text-secondary hover:bg-gray-100"
                }`}
              >
                {t("header.ka")}
              </button>
            </div>
          </nav>

          <div className="md:hidden">
            <Hamburger
              isOpen={isOpen}
              toggleMenu={toggleMenu}
              color="var(--color-text-primary)"
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-sm absolute top-full left-0 w-full shadow-lg"
          >
            <nav className="flex flex-col items-center space-y-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-medium text-text-secondary hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <button
                  onClick={() => changeLanguage("en")}
                  className={`px-4 py-2 text-lg font-semibold rounded-md transition-colors ${
                    i18n.language === "en"
                      ? "bg-primary text-white"
                      : "text-text-secondary hover:bg-gray-100"
                  }`}
                >
                  {t("header.en")}
                </button>
                <button
                  onClick={() => changeLanguage("ka")}
                  className={`px-4 py-2 text-lg font-semibold rounded-md transition-colors ${
                    i18n.language === "ka"
                      ? "bg-primary text-white"
                      : "text-text-secondary hover:bg-gray-100"
                  }`}
                >
                  {t("header.ka")}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
