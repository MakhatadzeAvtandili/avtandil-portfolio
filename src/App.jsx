import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Success from "./pages/Success";
import BlogPage from "./pages/BlogPage";
import PostPage from "./pages/PostPage";

function App() {
  const location = useLocation();

  const LandingPage = () => (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="blob-container">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<PostPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
