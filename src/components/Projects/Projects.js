import React from "react";
import { motion } from "framer-motion";
import { fadeTop, motionStep } from "./Motion";
import Featured from "./Featured";
import Section from "../Common/Section";
import ProjectCard from "./ProjectCard";
import RightSvg from "../../assets/svg/right-pattern.svg";
import mapmytrip from "../../images/mapmytrip.jpg"
import bookify from "../../images/work12.jpg"
import codegrow from "../../images/codegrow.jpg"

export const projectsData = [
  {
    id: 1,
    thumbnail: mapmytrip,
    title: "MapMyTrip",
    description: "MapMyTrip uses the Gemini AI model to optimize travel routes and provide intelligent recommendations. It integrates Google APIs for real-time destination data, images, and secure Google login for personalized planning.",
    live: "https://map-my-trip.vercel.app/",
    code: "https://github.com/Sumitkatkam/MapMyTrip",
    tech: ["React+Vite, Tailwind CSS, Shadcn/ui, Gemini AI Model, Firebase, Google Place and Photos API"],
    featured: false,
  },
  {
    id: 2,
    thumbnail: bookify,
    title: "Bookify Store",
    description: "Bookify Store is a responsive e-commerce web app built with React, Vite, and Redux for smooth browsing and checkout. It features dynamic book listings, cart management, and user-friendly UI for an enhanced shopping experience.",
    live: "https://bookify-store-frontend.vercel.app/",
    code: "https://github.com/Sumitkatkam/bookify-store-frontend",
    tech: ["React+Vite, Tailwind CSS, MongoDB, Node.js, Redux, Firebase"],
    featured: false,
  },
  {
    id: 3,
    thumbnail: codegrow,
    title: "Code Grow",
    description: "An AI-powered collaborative coding platform built with React, Node.js, and Socket.io, featuring real-time interaction, responsive UI, and session-based challenge sharing.",
    code: "https://github.com/Sumitkatkam/Code-Grow",
    tech: ["React, Node.js, Socket.io"],
    featured: false,
  },
];

const Projects = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Projects upon which I have worked on."
      className="relative"
    >
      <div className="space-y-5 lg:space-y-10 px-5 md:px-10 lg:px-20 2xl:px-40">
        {/* Right SVG */}
        <img
          src={RightSvg}
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        {projectsData
          .filter((e) => e.featured === true)
          .map((e, i) => (
            <motion.div key={i} variants={fadeTop} {...motionStep}>
              <Featured
                live={e.live}
                thumbnail={e.thumbnail}
                code={e.code}
                title={e.title}
                description={e.description}
                tech={e.tech}
                secondary={i % 2 === 0 ? false : true}
              />
            </motion.div>
          ))}
      </div>
      <div className="grid grid-cols-8 2xl:grid-cols-12 gap-6 gap-y-8 my-10 px-5 md:px-10 lg:px-20 2xl:px-40">
        {projectsData
          .filter((e) => e.featured !== true)
          .map((e, i) => (
            <ProjectCard
              live={e.live}
              thumbnail={e.thumbnail}
              code={e.code}
              title={e.title}
              description={e.description}
              tech={e.tech}
              key={i}
            />
          ))}
      </div>
      <span>
        For More Projects and Other work visit my{" "}
        <a
          href="https://github.com/Sumitkatkam?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", color: "red" }}
        >
          GitHub
        </a>
      </span>
    </Section>
  );
};

export default Projects;
