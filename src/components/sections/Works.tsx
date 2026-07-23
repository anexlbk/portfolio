import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import SectionWrapper from "../../hoc/SectionWrapper";
import SectionHeading from "../atoms/SectionHeading";
import { fadeIn } from "../../utils/motion";
import { projects } from "../../constants";

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => (
  <motion.div variants={fadeIn("up", "spring", 0.15 * index, 0.75)}>
    <Tilt
      tiltMaxAngleX={30}
      tiltMaxAngleY={30}
      glareEnable
      glareMaxOpacity={0.3}
      glarePosition="all"
      scale={1.02}
      transitionSpeed={400}
      className="glass-card p-5 rounded-2xl sm:w-[360px] w-full min-h-[420px] flex flex-col"
    >
      <div className="relative w-full h-[200px] rounded-xl overflow-hidden bg-tertiary">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-tertiary to-primary">
            <span className="text-4xl font-spaceGrotesk font-bold text-white/20">
              {project.name.charAt(0)}
            </span>
          </div>
        )}

        <div className="absolute top-2 right-2 flex gap-2">
          {project.source_code_link && (
            <a
              href={project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white text-xs hover:bg-black/80 transition"
            >
              GH
            </a>
          )}
          {project.live_link && (
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-tech-accent/80 flex items-center justify-center text-primary text-xs font-bold hover:bg-tech-accent transition"
            >
              Live
            </a>
          )}
        </div>
      </div>

      <div className="flex-1 mt-4">
        <h3 className="text-white font-bold font-spaceGrotesk text-lg">
          {project.name}
        </h3>
        <p className="text-secondary text-sm font-manrope mt-2 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag.name}
            className="text-xs font-medium px-2 py-1 rounded-full font-manrope"
            style={{ color: tag.color, backgroundColor: `${tag.color}15` }}
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => (
  <div id="projects">
    <SectionHeading
      subText="My work"
      headText="Projects."
    />

    <motion.p
      variants={fadeIn("up", "spring", 0.1, 1)}
      className="text-secondary text-sm sm:text-base max-w-3xl leading-relaxed font-manrope mb-10"
    >
      The following projects showcase my skills and experience through
      real-world applications. Each project is described with its tech stack
      and key features.
    </motion.p>

    <div className="flex flex-wrap gap-8 justify-center">
      {projects.map((project, i) => (
        <ProjectCard key={project.name} project={project} index={i} />
      ))}
    </div>
  </div>
);

export default SectionWrapper(Works, "work");
