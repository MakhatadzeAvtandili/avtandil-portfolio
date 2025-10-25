import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import SEO from "./components/SEO";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Success from "./pages/Success";
import BlogPage from "./pages/BlogPage";
import PostPage from "./pages/PostPage";
import Preloader from "./components/Preloader";

function App() {
  const location = useLocation();
  const { t } = useTranslation("common");
  const [isLoading, setIsLoading] = useState(true);
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const preloaderTimer = setTimeout(() => {
      setIsPreloaderVisible(false);
    }, 2800);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(preloaderTimer);
    };
  }, []);

  const LandingPage = () => (
    <>
      <SEO
        title={t("seo.home_title")}
        description={t("seo.home_description")}
      />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
    </>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="blob-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <AnimatePresence mode="wait">
        {isPreloaderVisible && <Preloader isLoading={isLoading} />}
      </AnimatePresence>

      <Header />

      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/success" element={<Success />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<PostPage />} />
          </Routes>
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}

export default App;
