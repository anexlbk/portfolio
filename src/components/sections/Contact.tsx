import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../../hoc/SectionWrapper";
import SectionHeading from "../atoms/SectionHeading";
import { slideIn } from "../../utils/motion";
import StarsCanvas from "../canvas/Stars";
import EarthCanvas from "../canvas/Earth";

const Contact = () => {
  return (
    <div className="relative" id="contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "spring", 0.2, 1)}
          className="flex-[0.75] glass-card p-8 rounded-2xl"
        >
          <SectionHeading
            subText="Get in touch"
            headText="Contact."
          />

          <div className="flex flex-col gap-6 py-4">
            <p className="text-secondary text-sm font-manrope leading-relaxed">
              I'm always open to new opportunities, collaborations, and interesting conversations.
              Feel free to reach out through any of the channels below.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:anaslachmi@gmail.com"
                className="flex items-center gap-3 text-white hover:text-tech-accent transition-colors font-manrope text-sm"
              >
                <span className="w-10 h-10 rounded-lg bg-tertiary/50 border border-white/10 flex items-center justify-center text-tech-accent text-lg">
                  @
                </span>
                anaslachmi@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/anas-lachmi-benboukrita/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-tech-accent transition-colors font-manrope text-sm"
              >
                <span className="w-10 h-10 rounded-lg bg-tertiary/50 border border-white/10 flex items-center justify-center text-tech-accent text-lg">
                  in
                </span>
                LinkedIn
              </a>
            </div>

            <a
              href="https://linktr.ee/aneslbk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-tech-accent/90 hover:bg-tech-accent py-3 px-8 rounded-xl text-primary font-bold font-spaceGrotesk text-sm transition-colors w-fit mt-2"
            >
              Contact me via Linktree
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "spring", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <StarsCanvas />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
