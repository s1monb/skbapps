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
  let [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div
        className={`hidden xl:block w-screen subpixel-antialiased h-screen text-white`}
      >
        <Sidebar isOpen={isOpen} setOpen={setOpen} />
        <motion.div
          className="inline-block right-0 absolute"
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

      <div className="block xl:hidden text-white text-center mt-10 text-3xl">
        <p>Only desktop version at this time.</p>
      </div>
    </div>
  );
}

export default App;
