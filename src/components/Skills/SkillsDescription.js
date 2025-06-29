import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "../Common/Reveal";

const SkillsDescription = () => {
  return (
    <div className="text-left lg:pt-0">
      <motion.h2
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-medium text-2xl text-amber-500 dark:text-amber-200 mt-5 mb-5"
      >
        <Reveal width="100%">
          A look at all the programming languages, libraries, and tools I've
          worked with.
        </Reveal>
      </motion.h2>
      <motion.p
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-sm font-light"
      >
        In the world of development and analytics, I've built solutions that are scalable, responsive, and data-driven — seamlessly combining intuitive UI/UX with robust backend logic and actionable business intelligence as a &nbsp;
        <span className="font-semibold">Software Developer and Data Analytics.</span>
      </motion.p>

      <motion.h2
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5"
      >
        <Reveal width="100%">Software Development</Reveal>
      </motion.h2>
      <motion.p
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-sm font-light text-justify"
      >
        I build robust and user-friendly web applications using technologies like React, Node.js, Express.js, and MongoDB. My focus lies in creating scalable solutions with clean UI, efficient backend logic, and seamless integration.
      </motion.p>

      <div className="flex">
        <div className="">
          <motion.h3
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5"
          >
            <Reveal width="100%">Data Analytics & BI</Reveal>
          </motion.h3>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-light text-justify"
          >
            As a Data Analyst Intern, I transform raw data into insights through Power BI dashboards, Python (Pandas, Matplotlib), and SQL queries—helping businesses make informed, data-backed decisions.
          </motion.p>
          <motion.h3
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5"
          >
            <Reveal width="100%">Tech Stack Excellence</Reveal>
          </motion.h3>
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-light text-justify"
          >
            My development workflow is powered by modern tools like Vite, Tailwind CSS, Firebase, and Redux. I stay current with best practices to ensure performance, maintainability, and clean code in every project.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default SkillsDescription;
