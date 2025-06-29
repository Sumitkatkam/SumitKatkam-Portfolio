import React from "react";
import Section from "../Common/Section";
import { motion } from "framer-motion";
import Quote from "../Common/Quote";
import FeaturedCard from "../FeatureCard/FeaturedCard";
import { FaGraduationCap } from "react-icons/fa";
import RightSvg from "../../assets/svg/right-pattern.svg";
import { Reveal } from "../Common/Reveal";
import BlurCircles from "../Common/BlurCircles";
import { HiOutlineBuildingOffice } from "react-icons/hi2";

const About = () => {
  return (
    <Section
      id="about"
      title="Overview"
      subtitle="Software Developer | Data Analyst"
      className="relative"
    >
      <img
        src={RightSvg}
        alt=""
        className="absolute hidden right-0 bottom-[40%] w-2/12 max-w-xs md:block"
        loading="lazy"
        height={700}
        width={320}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="flex flex-col min-h-fit text-center xl:text-left xl:flex-row max-w-7xl px-4 mx-auto items-center md:pt-0 md:pb-16 md:mx-20 z-10"
      >
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5 ml-0  xl:pt-0 xl:ml-20 md:pt-10"
        >
          <h4 className="text-2xl font-medium text-amber-600 dark:text-amber-300">
            <Reveal width="100%">Here's a Little Background.</Reveal>
          </h4>
          <div className="bg-white dark:bg-[#101111] p-5 rounded-3xl shadow-lg shadow-gray-400/50 dark:shadow-black/30 ">
            <p className="text-base font-light">
              Hi, I am <span className="font-semibold">Sumit Katkam</span>{" "}
              I am an aspiring{" "}
              <span className="font-semibold">Sofwatre Developer and Data Analyst</span>. I
              with a passion for building intelligent, scalable web applications and deriving actionable insights from data. I bring a hybrid skill set that combines strong backend/frontend development experience with data analytics proficiency.
            </p>
          </div>

          <h4 className="text-2xl font-medium text-amber-600 dark:text-amber-300">
            <Reveal width="100%">Work Experience</Reveal>
          </h4>

          <FeaturedCard
            icon={
              <div className="rounded-xl bg-amber-400 p-3.5 dark:bg-amber-400">
                <HiOutlineBuildingOffice className="h-5 w-5 text-white" />
              </div>
            }
            title="June 2025 - Current"
            desc="Data Analyst Intern at Diatrends Jewellery Pvt. Ltd."
          />

          <h4 className="text-2xl font-medium text-amber-600 dark:text-amber-300">
            <Reveal width="100%">Education</Reveal>
          </h4>

          <FeaturedCard
            icon={
              <div className="rounded-xl bg-amber-400 p-3.5 dark:bg-amber-400">
                <FaGraduationCap className="h-5 w-5 text-white" />
              </div>
            }
            title="August 2021 - May 2025"
            desc={`B-Tech - Information Technology from A. C. Patil College of Engineering, Navi Mumbai.\nCGPA: 8.33`}
          />
        </motion.div>
      </motion.div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <BlurCircles />
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative pt-10 md:pt-5 lg:pt-0"
        >
          <Quote />
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
