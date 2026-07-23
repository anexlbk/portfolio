import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ModeProvider, useMode } from "./context/ModeContext";
import Navbar from "./components/layout/Navbar";
import ModeSelector from "./components/layout/ModeSelector";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Tech from "./components/sections/Tech";
import Experience from "./components/sections/Experience";
import Works from "./components/sections/Works";
import Workshops from "./components/sections/Workshops";
import MarketingSkills from "./components/sections/MarketingSkills";
import Community from "./components/sections/Community";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

const AppContent = () => {
  const [showModeSelector, setShowModeSelector] = useState(true);
  const { mode } = useMode();

  return (
    <>
      <AnimatePresence>
        {showModeSelector && (
          <ModeSelector onSelect={() => setShowModeSelector(false)} />
        )}
      </AnimatePresence>

      {!showModeSelector && (
        <>
          <Navbar />

          <div className="relative z-0 bg-primary">
            <Hero />

            <div className="section-gradient py-10 space-y-24">
              {(mode === "tech" || mode === "all") && (
                <>
                  <About />
                  <Works />
                  <Tech />
                  <Experience />
                  <Workshops />
                </>
              )}

              {(mode === "marketing" || mode === "all") && (
                <>
                  <MarketingSkills />
                  <Community />
                </>
              )}

              <Contact />
            </div>

            <Footer />
          </div>
        </>
      )}
    </>
  );
};

const App = () => (
  <ModeProvider>
    <AppContent />
  </ModeProvider>
);

export default App;
