import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import SectionWrapper from "../../hoc/SectionWrapper";
import SectionHeading from "../atoms/SectionHeading";
import { fadeIn } from "../../utils/motion";
import { caseStudies, marketingSkills } from "../../constants";

const CaseStudyCard = ({
  study,
  index,
}: {
  study: (typeof caseStudies)[0];
  index: number;
}) => (
  <motion.div variants={fadeIn("up", "spring", 0.15 * index, 0.75)}>
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      glareEnable
      glareMaxOpacity={0.2}
      scale={1.02}
      transitionSpeed={400}
      className="glass-card rounded-2xl p-6 sm:p-8 border border-mkt-accent/20"
    >
      <h3 className="text-mkt-accent font-spaceGrotesk font-bold text-xl mb-2">
        {study.title}
      </h3>
      <p className="text-secondary text-sm font-manrope mb-6 leading-relaxed">
        {study.description}
      </p>
      <div className="grid grid-cols-2 gap-4">
        {study.metrics.map((metric) => (
          <div key={metric.label} className="text-center">
            <p className="text-white font-spaceGrotesk font-bold text-xl sm:text-2xl">
              {metric.value}
            </p>
            <p className="text-secondary text-xs font-manrope">{metric.label}</p>
          </div>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const MarketingSkills = () => (
  <div id="marketing-skills">
    <SectionHeading
      subText="What I Do"
      headText="Marketing Skills."
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {marketingSkills.map((cat, i) => (
        <motion.div
          key={cat.category}
          variants={fadeIn("up", "spring", 0.1 * i, 0.5)}
          className="glass-card rounded-xl p-6 border border-white/5"
        >
          <h3 className="text-mkt-accent font-spaceGrotesk font-bold text-base mb-3">
            {cat.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>

    <SectionHeading
      subText="Proof of Results"
      headText="Case Studies."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {caseStudies.map((study, i) => (
        <CaseStudyCard key={study.title} study={study} index={i} />
      ))}
    </div>
  </div>
);

export default SectionWrapper(MarketingSkills, "marketing-skills");
