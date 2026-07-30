import Navbar from "./components/layout/Navbar";
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

const App = () => (
  <>
    <Navbar />

    <div className="relative z-0 bg-primary">
      <Hero />

      <div className="section-gradient py-10 space-y-24">
        <About />
        <Works />
        <Tech />
        <Experience />
        <Workshops />
        <MarketingSkills />
        <Community />
        <Contact />
      </div>

      <Footer />
    </div>
  </>
);

export default App;
