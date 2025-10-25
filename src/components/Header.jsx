/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = () => {
  const { t, i18n } = useTranslation("common");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => setIsOpen(!isOpen);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      if (!isHomePage) {
        setActiveSection("");
        return;
      }

      const sections = [
        "hero",
        "workflow",
        "projects",
        "skills",
        "testimonials",
        "contact",
      ];
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
  }, [isHomePage, location.pathname]);

  useEffect(() => {
    if (isHomePage && location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [isHomePage, location.hash]);

  const navLinks = [
    {
      href: "#workflow",
      label: t("header.about"),
      type: "section",
      id: "workflow",
    },
    {
      href: "#projects",
      label: t("header.projects"),
      type: "section",
      id: "projects",
    },
    {
      href: "#testimonials",
      label: t("header.testimonials"),
      type: "section",
      id: "testimonials",
    },
    {
      href: "#contact",
      label: t("header.contact"),
      type: "section",
      id: "contact",
    },
    { href: "/blog", label: t("header.blog"), type: "page" },
  ];

  const underline = (isActive) =>
    isActive ? (
      <motion.span
        layoutId="active-nav-link"
        className="pointer-events-none absolute -bottom-2 left-0 w-full h-0.5 bg-primary rounded-full"
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
      />
    ) : null;

  const handleSectionClick = (id) => {
    if (isHomePage) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/#${id}`);
    }
    setIsOpen(false);
  };

  const renderNavLink = (link) => {
    const isActive =
      (link.type === "page" && location.pathname === link.href) ||
      (link.type === "section" && activeSection === link.id);

    if (link.type === "page") {
      return (
        <NavLink
          to={link.href}
          end
          className="relative text-lg font-medium text-text-secondary hover:text-primary transition-colors"
          onClick={(e) => {
            setIsOpen(false);
            if (location.pathname !== link.href) {
              e.preventDefault();
              navigate(link.href);
            }
          }}
        >
          {link.label}
          {underline(isActive)}
        </NavLink>
      );
    }

    // section links
    return isHomePage ? (
      <button
        type="button"
        onClick={() => handleSectionClick(link.id)}
        className="relative text-lg font-medium text-text-secondary hover:text-primary transition-colors"
      >
        {link.label}
        {underline(isActive)}
      </button>
    ) : (
      <Link
        to={`/#${link.id}`}
        className="relative text-lg font-medium text-text-secondary hover:text-primary transition-colors"
        onClick={() => setIsOpen(false)}
      >
        {link.label}
        {underline(isActive)}
      </Link>
    );
  };

  return (
    <header
      className={`sticky top-0 z-100 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-text-primary min-[768px]:max-[1024px]:text-[15px]"
            onClick={() => setIsOpen(false)}
          >
            Avtandili
            <span className="text-primary min-[768px]:max-[1024px]:text-[15px]">
              .
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 min-[768px]:max-[1024px]:[&_a.relative]:text-[15px] min-[768px]:max-[1024px]:[&_button.relative]:text-[15px] min-[768px]:max-[1024px]:space-x-5">
            {navLinks.map((link) => (
              <div key={link.href}>{renderNavLink(link)}</div>
            ))}
            <div className="flex items-center space-x-2 ">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors  ${
                  i18n.language === "en"
                    ? "bg-primary text-white"
                    : "text-text-secondary hover:bg-gray-100 min-[768px]:max-[1024px]:text-[12px]"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("ka")}
                className={`px-3 py-1 text-sm font-semibold rounded-md transition-colors ${
                  i18n.language === "ka"
                    ? "bg-primary text-white"
                    : "text-text-secondary hover:bg-gray-100 min-[768px]:max-[1024px]:text-[12px]"
                }`}
              >
                KA
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
            className="md:hidden bg-white/95 backdrop-blur-sm absolute top-full left-0 w-full shadow-lg z-90"
          >
            <nav className="flex flex-col items-center space-y-6 py-8">
              {navLinks.map((link) => (
                <div key={link.href}>{renderNavLink(link)}</div>
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
                  EN
                </button>
                <button
                  onClick={() => changeLanguage("ka")}
                  className={`px-4 py-2 text-lg font-semibold rounded-md transition-colors ${
                    i18n.language === "ka"
                      ? "bg-primary text-white"
                      : "text-text-secondary hover:bg-gray-100"
                  }`}
                >
                  KA
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
