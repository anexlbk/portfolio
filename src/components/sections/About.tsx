import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../../hoc/SectionWrapper";
import SectionHeading from "../atoms/SectionHeading";
import { fadeIn, textVariant } from "../../utils/motion";
import { technologies } from "../../constants";

const About = () => {
  const techIcons = technologies.slice(0, 7);

  return (
    <div id="about">
      <SectionHeading
        subText="Introduction"
        headText="Overview."
      />

      <motion.p
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="text-secondary text-[0.9rem] sm:text-[1rem] max-w-3xl leading-relaxed font-manrope mb-12"
      >
        I'm a CS student passionate about building AI-powered products and
        full-stack web applications. As the founder of Feron and creator of
        Nami AI, I combine technical skills with a sharp understanding of
        digital growth strategy. My toolkit spans Python, JavaScript, React,
        Supabase, and modern LLM frameworks.
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
        {techIcons.map((tech, i) => (
          <motion.div
            key={tech.name}
            variants={fadeIn("up", "spring", 0.1 * i, 0.5)}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center p-3 transition-all duration-300 hover:scale-110 hover:border-white/25 hover:bg-white/10">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-secondary text-xs font-manrope">{tech.name}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="glass-card rounded-xl p-6 max-w-sm"
      >
        <h3 className="text-white font-spaceGrotesk font-bold text-lg mb-3">
          Languages
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="tool-pill">English</span>
          <span className="tool-pill">French</span>
          <span className="tool-pill">Arabic</span>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
