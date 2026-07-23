import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import SectionWrapper from "../../hoc/SectionWrapper";
import SectionHeading from "../atoms/SectionHeading";
import { fadeIn } from "../../utils/motion";
import { experiences } from "../../constants";

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "rgba(255,255,255,0.03)",
      backdropFilter: "blur(8px)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "12px",
    }}
    contentArrowStyle={{ borderRight: "7px solid rgba(255,255,255,0.1)" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-3 h-3 rounded-full bg-white/80" />
      </div>
    }
  >
    <motion.div variants={fadeIn("up", "spring", 0.1 * index, 0.5)}>
      <h3 className="text-white text-lg font-bold font-spaceGrotesk">
        {experience.title}
      </h3>
      <p className="text-secondary text-sm font-manrope">
        {experience.company_name}
      </p>
      <ul className="mt-3 list-disc ml-4 space-y-1">
        {experience.points.map((point, i) => (
          <li
            key={i}
            className="text-secondary text-xs sm:text-sm font-manrope leading-relaxed"
          >
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  </VerticalTimelineElement>
);

const Experience = () => (
  <div id="experience">
    <SectionHeading
      subText="What I've done"
      headText="Work Experience."
    />

    <div className="mt-12 flex flex-col">
      <VerticalTimeline lineColor="rgba(255,255,255,0.1)">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.title + i} experience={exp} index={i} />
        ))}
      </VerticalTimeline>
    </div>
  </div>
);

export default SectionWrapper(Experience, "experience");
