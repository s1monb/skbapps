import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const name = {
  show: {
    display: "inline",
    transition: {
      duration: 0,
      delay: 0.5,
    },
  },
  hidden: {
    display: "none",
    transition: {
      duration: 0,
      delay: 0.2,
    },
  },
};

function SidebarButton({ title, isOpen, children }) {
  return (
    <Link
      to={title}
      activeClass="active"
      spy={true}
      smooth={true}
      duration={400}
      offset={-300}
      className="block w-full focus:outline-none text-4xl cursor-pointer py-1 hover:text-white text-gray-500 mt-10"
    >
      <li className={isOpen ? "text-left ml-8" : "text-center"}>
        {children}
        <motion.span
          animate={isOpen ? "show" : "hidden"}
          variants={name}
          className="ml-3"
        >
          {title}
        </motion.span>
      </li>
    </Link>
  );
}

export default SidebarButton;
