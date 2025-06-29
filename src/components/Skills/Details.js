import React from "react";
import Label from "./Label";
import { motion } from "framer-motion";
import { Reveal } from "../Common/Reveal";

const Details = () => {
  return (
    <div className="flex flex-col text-left pt-5">
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5 mb-1"
      >
        <Reveal width="100%">Programming Languages</Reveal>
      </motion.h2>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex gap-2"
      >
        <Label indicator={100}>Java</Label>
        <Label indicator={100}>Javascript</Label>
        <Label indicator={100}>Python</Label>
      </motion.div>

      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5 mb-1"
      >
        <Reveal width="100%">Technologies</Reveal>
      </motion.h2>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        <Label indicator={100}>React.js</Label>
        <Label indicator={100}>Node.js</Label>
        <Label indicator={100}>Express.js</Label>
        <Label indicator={100}>MongoDB</Label>
        <Label indicator={100}>Tailwind CSS</Label>
        <Label indicator={100}>Firebase</Label>
        <Label indicator={100}>Vite</Label>
        <Label indicator={100}>Redux</Label>
        <Label indicator={100}>Shadcn/ui</Label>
      </motion.div>

      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5 mb-1"
      >
        <Reveal width="100%">Softwares and Tools</Reveal>
      </motion.h2>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        <Label indicator={100}>Git</Label>
        <Label indicator={100}>GitHub</Label>
        <Label indicator={100}>VS Code</Label>
        <Label indicator={100}>Postman</Label>
      </motion.div>

      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-medium text-lg text-amber-500 dark:text-amber-200 mt-5 mb-1"
      >
        <Reveal width="100%">Data & Analytics Stack</Reveal>
      </motion.h2>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2"
      >
        <Label indicator={100}>Power BI</Label>
        <Label indicator={100}>Excel</Label>
        <Label indicator={100}>SQL</Label>
        <Label indicator={100}>Pandas</Label>
        <Label indicator={100}>Matplotlib</Label>
      </motion.div>
    </div>
  );
};

export default Details;
