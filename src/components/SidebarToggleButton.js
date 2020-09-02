import React from "react";
import { motion } from "framer-motion";
const burgerTheme = {
  bgdark: {
    backgroundColor: "#000",
  },
  bglight: {
    backgroundColor: "#FFF",
  },
};

function SidebarButton({ toggle, isOpen, theme }) {
  return (
    <div
      id="nav-icon4"
      onClick={toggle}
      className={
        isOpen ? "open float-right opacity-75" : "float-right opacity-75"
      }
    >
      <motion.span
        animate={theme ? "bgdark" : "bglight"}
        variants={burgerTheme}
        initial={false}
      ></motion.span>
      <motion.span
        animate={theme ? "bgdark" : "bglight"}
        variants={burgerTheme}
        initial={false}
      ></motion.span>
      <motion.span
        animate={theme ? "bgdark" : "bglight"}
        variants={burgerTheme}
        initial={false}
      ></motion.span>
    </div>
  );
}

export default SidebarButton;
