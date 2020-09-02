import React, { useState } from "react";
import { motion } from "framer-motion";

import Sidebar from "./Sidebar";
import HomeSection from "./HomeSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";
import ThemeToggleButton from "./ThemeToggleButton";

const section = {
  normal: {
    width: "75%",
    transition: {
      duration: 0.5,
    },
  },
  large: {
    width: "calc(100% - 100px)",
    transition: {
      duration: 0.6,
    },
  },
};

const themeAnimation = {
  light: {
    backgroundColor: "#FFF",
    transition: {
      duration: 1,
    },
  },
  dark: {
    backgroundColor: "#000",
    transition: {
      duration: 1,
    },
  },
};

const themeTextColor = {
  light: {
    color: "black",
    transition: {
      duration: 1,
      delay: 0.1,
    },
  },
  dark: {
    color: "white",
    transition: {
      duration: 1,
      delay: 0.1,
    },
  },
};

function App() {
  let [isOpen, setOpen] = useState(true);
  let [theme, setTheme] = useState(false);

  return (
    <motion.div className="w-screen text-gray-300 subpixel-antialiased h-screen">
      <motion.div
        className="fixed w-screen h-screen z-0 bg-black"
        animate={theme ? "light" : "dark"}
        variants={themeAnimation}
        initial={false}
      ></motion.div>
      <Sidebar isOpen={isOpen} setOpen={setOpen} theme={theme} />
      <motion.div
        className="inline-block right-0 pl-10 absolute"
        animate={isOpen ? "normal" : "large"}
        variants={section}
        initial={false}
      >
        <motion.span
          animate={theme ? "light" : "dark"}
          initial={false}
          variants={themeTextColor}
        >
          <HomeSection theme={() => theme} />
          <ProjectsSection theme={() => theme} />
          <SkillsSection theme={() => theme} />
          <ContactSection theme={() => theme} />
        </motion.span>
      </motion.div>
      <ThemeToggleButton theme={theme} setTheme={setTheme} />
    </motion.div>
  );
}

export default App;
