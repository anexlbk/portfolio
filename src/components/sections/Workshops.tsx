import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../../hoc/SectionWrapper";
import SectionHeading from "../atoms/SectionHeading";
import { fadeIn } from "../../utils/motion";
import { workshops } from "../../constants";

const Workshops = () => (
  <div>
    <SectionHeading
      subText="Knowledge Transfer"
      headText="Workshops."
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {workshops.map((ws, i) => (
        <motion.div
          key={ws.title}
          variants={fadeIn("up", "spring", 0.12 * i, 0.6)}
          className="glass-card rounded-xl p-6 border border-mkt-accent/10"
        >
          <h3 className="text-white font-spaceGrotesk font-bold text-lg mb-2">
            {ws.title}
          </h3>
          <p className="text-secondary text-sm font-manrope leading-relaxed">
            {ws.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default SectionWrapper(Workshops, "workshops");
