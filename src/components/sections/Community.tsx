import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../../hoc/SectionWrapper";
import SectionHeading from "../atoms/SectionHeading";
import { fadeIn } from "../../utils/motion";
import { certificates, eventPhotos } from "../../constants";

const Community = () => (
  <div id="community">
    <SectionHeading
      subText="Community & Credentials"
      headText="Community."
    />

    <div className="mb-12">
      <motion.h3
        variants={fadeIn("up", "spring", 0.1, 0.5)}
        className="text-white font-spaceGrotesk font-bold text-lg mb-4"
      >
        Events
      </motion.h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {eventPhotos.map((photo, i) => (
          <motion.div
            key={photo.src}
            variants={fadeIn("up", "spring", 0.1 * i, 0.5)}
            className="glass-card rounded-xl overflow-hidden aspect-square"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>

    <div>
      <motion.h3
        variants={fadeIn("up", "spring", 0.3, 0.5)}
        className="text-white font-spaceGrotesk font-bold text-lg mb-4"
      >
        Certifications
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.name}
            variants={fadeIn("right", "spring", 0.1 * i, 0.5)}
            className="glass-card rounded-xl p-4 flex items-center gap-4 border border-white/5"
          >
            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-tertiary">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white text-sm font-manrope font-medium">
              {cert.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default SectionWrapper(Community, "community");
