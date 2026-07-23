import React, { useEffect, useState } from "react";
import { useMode } from "../../context/ModeContext";
import { navLinks } from "../../constants";
import { ModeType } from "../../types";

const Navbar = () => {
  const { mode, setMode } = useMode();
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .filter((l) => l.mode === undefined || l.mode === mode || mode === "all")
      .map((l) => document.getElementById(l.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, [mode]);

  const filteredLinks = navLinks.filter(
    (l) => l.mode === undefined || l.mode === mode || mode === "all"
  );

  const modeButtons: { label: string; value: ModeType; color: string }[] = [
    { label: "AI / Tech", value: "tech", color: "bg-tech-accent" },
    { label: "Marketing", value: "marketing", color: "bg-mkt-accent" },
    { label: "All", value: "all", color: "bg-white" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/90 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-16 xl:px-12 h-16">
        <a
          href="/"
          className="flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[1.1rem] font-bold font-spaceGrotesk tracking-tight">
            Anes<span className="text-tech-accent">Lbk</span>
          </p>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {modeButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setMode(btn.value)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                mode === btn.value
                  ? `${btn.color} text-primary font-bold`
                  : "text-secondary hover:text-white"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <ul className="hidden md:flex items-center gap-6">
          {filteredLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  active === link.id
                    ? mode === "marketing"
                      ? "text-mkt-accent"
                      : "text-tech-accent"
                    : "text-secondary hover:text-white"
                }`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white text-2xl"
          >
            {mobileOpen ? "\u2715" : "\u2630"}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-primary/95 backdrop-blur-md border-t border-white/10">
          <div className="flex justify-center gap-2 py-3 px-6">
            {modeButtons.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setMode(btn.value)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  mode === btn.value
                    ? `${btn.color} text-primary font-bold`
                    : "text-secondary hover:text-white"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
          <ul className="flex flex-col items-center gap-4 pb-6">
            {filteredLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-secondary hover:text-white text-base font-medium"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
