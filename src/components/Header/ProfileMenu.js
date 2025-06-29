import { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineCaretDown } from "react-icons/ai";
import { motion } from "framer-motion";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="flex justify-center z-30 "
    >
      <div onClick={() => setOpen(!open)} className="relative">
        <button className="flex items-center p-2 md:p-3 dark:bg-[#101111] bg-gray-100 rounded-xl">
          <AiOutlineCaretDown className="w-4 h-4" />
        </button>
        <ul
          className={`absolute right-0 w-40 py-2 mt-2 rounded-lg z-40 shadow-lg bg-gray-50 dark:bg-neutral-900 backdrop-blur-xl duration-700 ease-in-out ${
            open ? "block" : "hidden"
          }`}
        >
          <li className="border-b dark:border-white/5 border-black/5">
            <Link
              to="about"
              smooth={true}
              offset={-30}
              duration={800}
              onClick={() => setOpen(!open)}
              className="cursor-pointer flex w-full items-center px-3 py-2 text-sm hover:bg-white dark:hover:bg-neutral-800"
            >
              Overview
            </Link>
          </li>
          <li className="border-b dark:border-white/5 border-black/5">
            <Link
              to="skills"
              smooth={true}
              offset={-40}
              duration={800}
              onClick={() => setOpen(!open)}
              className="cursor-pointer flex w-full items-center px-3 py-2 text-sm hover:bg-white dark:hover:bg-neutral-800"
            >
              Expertise
            </Link>
          </li>
          <li className="border-b dark:border-white/5 border-black/5">
            <Link
              to="projects"
              smooth={true}
              offset={-40}
              duration={800}
              onClick={() => setOpen(!open)}
              className="cursor-pointer flex w-full items-center px-3 py-2 text-sm hover:bg-white dark:hover:bg-neutral-800"
            >
              Projects
            </Link>
          </li>
          <li className="border-b dark:border-white/5 border-black/5">
            <Link
              to="contact"
              smooth={true}
              offset={-40}
              duration={800}
              onClick={() => setOpen(!open)}
              className="cursor-pointer flex w-full items-center px-3 py-2 text-sm hover:bg-white dark:hover:bg-neutral-800"
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1K_zA7x-_0KQSLHIU_cZ6dNMYepGhaQ0Y/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(!open)}
              className="cursor-pointer flex w-full items-center px-3 py-2 text-sm hover:bg-white dark:hover:bg-neutral-800"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
