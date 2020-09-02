import React, { useState } from "react";
import { motion } from "framer-motion";

import Sidebar from "./Sidebar";
import HomeSection from "./HomeSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";

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

function App() {
  let [isOpen, setOpen] = useState(true);
  return (
    <div className="w-screen h-screen text-gray-300 subpixel-antialiased">
      <Sidebar isOpen={isOpen} setOpen={setOpen} />
      <motion.div
        className="inline-block right-0 h-screen pl-10 absolute"
        animate={isOpen ? "normal" : "large"}
        variants={section}
        initial={false}
      >
        <HomeSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </motion.div>
    </div>
  );
}

export default App;
