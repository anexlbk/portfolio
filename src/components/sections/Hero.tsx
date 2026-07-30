import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import ComputerCanvas from "../canvas/Computer";

const Hero = () => (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 sm:px-16 xl:px-12 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-tech-accent" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-tech-accent to-transparent" />
        </div>

        <div>
          <motion.div variants={textVariant(0.5)}>
            <p className="text-secondary text-sm sm:text-base font-manrope mb-2">
              Hi, I'm
            </p>
            <h1 className="font-spaceGrotesk text-white text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] font-bold leading-tight">
              Anes Lachemi
            </h1>
            <h2 className="font-spaceGrotesk text-[1.2rem] sm:text-[1.8rem] font-semibold mt-2">
              <span className="text-tech-text">AI Builder </span>
              <span className="text-secondary">& </span>
              <span className="text-mkt-text">Growth Marketer</span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeIn("up", "spring", 1, 1)}
            className="text-secondary text-sm sm:text-base max-w-md mt-4 leading-relaxed font-manrope"
          >
            I build AI-powered products and full-stack applications. Founder of Feron and creator of Nami AI.
          </motion.p>
        </div>
      </div>

      <div className="absolute right-0 top-0 w-full h-full md:w-[55%] lg:w-[50%]">
        <ComputerCanvas />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <a href="#about" className="flex flex-col items-center">
          <div className="w-7 h-12 rounded-full border-2 border-secondary/50 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-secondary"
            />
          </div>
          <p className="text-secondary text-xs mt-2 font-manrope">Scroll Down</p>
        </a>
      </motion.div>
    </section>
);

export default Hero;
