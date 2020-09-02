import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const name = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

function SidebarButton({ title, isOpen, theme }) {
  return (
    <Link
      to={title}
      activeClass="active"
      spy={true}
      smooth={true}
      duration={1000}
      offset={0}
      className="block w-full focus:outline-none text-xl sm:text-3xl text-left cursor-pointer pl-10 py-1 border-r-8 border-transparent hover:text-gray-300 hover:border-yellow-500"
    >
      <li className={isOpen ? "mb-2 " : "pb-2 ml-1 text-3xl"}>
        {title.charAt(0)}
        <motion.span animate={isOpen ? "show" : "hidden"} variants={name}>
          {title.substring(1)}
        </motion.span>
      </li>
    </Link>
  );
}

export default SidebarButton;
