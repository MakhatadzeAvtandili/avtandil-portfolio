import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Components & Pages
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About"; // This will be our "Workflow" section
import Skills from "./components/Skills"; // New skills section
import Contact from "./components/Contact";
import Success from "./pages/Success";

function App() {
  const location = useLocation();

  const LandingPage = () => (
    <>
      <main>
        <Hero />
        <About /> {/* Workflow Section */}
        <Projects />
        <Skills /> {/* Tech Stack Section */}
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
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
