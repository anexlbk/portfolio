import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";

interface Props {
  subText: string;
  headText: string;
}

const SectionHeading = ({ subText, headText }: Props) => (
  <motion.div variants={textVariant()} className="mb-8">
    <p className="text-secondary uppercase text-sm tracking-wider mb-2 font-manrope">
      {subText}
    </p>
    <h2 className="font-spaceGrotesk text-white text-[2rem] sm:text-[2.5rem] font-bold leading-tight">
      {headText}
    </h2>
  </motion.div>
);

export default SectionHeading;
