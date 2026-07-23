import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../../hoc/SectionWrapper";
import SectionHeading from "../atoms/SectionHeading";
import { fadeIn } from "../../utils/motion";
import { technologies } from "../../constants";

const Tech = () => (
  <div>
    <SectionHeading subText="What I Use" headText="Tech Stack." />

    <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-10">
      {technologies.map((tech, i) => (
        <motion.div
          key={tech.name}
          variants={fadeIn("up", "spring", 0.08 * i, 0.5)}
          className="group flex flex-col items-center gap-3"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center p-3 sm:p-4 transition-all duration-300 group-hover:scale-110 group-hover:border-white/25 group-hover:bg-white/10">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <p className="text-secondary text-center text-xs font-manrope">
            {tech.name}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default SectionWrapper(Tech, "tech");
