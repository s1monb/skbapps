import React from "react";
import { motion } from "framer-motion";
import SidebarButton from "./SidebarButton";

const sidebar = {
  show: {
    width: "25%",
    transition: {
      duration: 0.6,
    },
  },
  hidden: {
    width: "100px",
    transition: {
      duration: 0.5,
    },
  },
};

function Sidebar({ isOpen, setOpen }) {
  // State functions for sidebar toggle
  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <motion.div
      variants={sidebar}
      animate={isOpen ? "show" : "hidden"}
      className="h-screen inline-block fixed top-0 bg-dark1 text-white shadow-xl z-50"
      initial={false}
    >
      {/* Header section */}
      <div>
        <div
          className={`w-full mt-12  ${
            isOpen ? "text-right pr-8" : "text-center"
          }`}
        >
          <button onClick={toggleOpen} className="focus:outline-none text-4xl">
            <span className="sr-only">Sidebare toggle</span>
            <i className={`far  ${isOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Links */}
      <div className="mt-32">
        <SidebarButton title="Hjem" isOpen={isOpen}>
          <i className="far fa-home"></i>
        </SidebarButton>
        <SidebarButton title="Prosjekter" isOpen={isOpen}>
          <i className="far fa-folder"></i>
        </SidebarButton>
        <SidebarButton title="Ferdigheter" isOpen={isOpen}>
          <i className="far fa-head-side-brain"></i>
        </SidebarButton>
        <SidebarButton title="Kontakt" isOpen={isOpen}>
          <i className="far fa-phone-alt"></i>
        </SidebarButton>
      </div>
    </motion.div>
  );
}

export default Sidebar;
