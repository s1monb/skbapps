import React from "react";
import { motion } from "framer-motion";
import SidebarToggleButton from "./SidebarToggleButton";
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

const image = {
  show: {
    width: "150px",
    filter: "none",
    transition: {
      duration: 0.3,
    },
  },
  hidden: {
    filter: "grayscale(50%)",
    width: "60px",
    transition: {
      duration: 0.4,
    },
  },
};

const name = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const themeTextColor = {
  dark: {
    color: "#FFF",
  },
  light: {
    color: "#222",
  },
};

function Sidebar({ isOpen, setOpen, theme }) {
  // State functions for sidebar toggle
  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <motion.div
      variants={sidebar}
      animate={isOpen ? "show" : "hidden"}
      className="border-r border-gray-700 h-screen inline-block fixed top-0"
      initial={false}
    >
      <motion.span animate={theme ? "light" : "dark"} variants={themeTextColor}>
        {/* Header section */}
        <div>
          <div className="w-full block mt-8 pr-6 h-2">
            <SidebarToggleButton
              toggle={() => toggleOpen()}
              isOpen={isOpen}
              theme={theme}
            />
          </div>
          <div className="ml-6 pt-16">
            <div
              style={{ height: "150px", display: !isOpen && "block" }}
              className="mx-auto"
            >
              <motion.img
                animate={isOpen ? "show" : "hidden"}
                variants={image}
                src="/img/simon.png"
                width="150px"
                alt="Developer Simon Kinn Bjørnøy"
              />
            </div>
            <div style={{ height: "80px" }}>
              <motion.h1
                animate={isOpen ? "show" : "hidden"}
                variants={name}
                className="font-bold text-xl sm:text-3xl sm:mt-2"
              >
                Simon K. Bjørnøy
              </motion.h1>
            </div>
          </div>
        </div>

        {/* Links */}
        <ul className="block mt-8">
          <SidebarButton title="Home" isOpen={isOpen} />
          <SidebarButton title="Projects" isOpen={isOpen} />
          <SidebarButton title="Skills" isOpen={isOpen} />
          <SidebarButton title="Contact" isOpen={isOpen} />
        </ul>

        {/* Icons */}
        <ul className="absolute bottom-0 flex flex-wrap justify-center text-2xl sm:text-3xl my-10 w-full px-10">
          <div>
            <a
              href="https://www.linkedin.com/in/simon-kinn-bj%C3%B8rn%C3%B8y-b9129115b/"
              className="opacity-75 hover:opacity-100 hover:cursor-pointer mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/s1monb"
              className="opacity-75 hover:opacity-100 hover:cursor-pointer mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square"></i>
            </a>

            <a
              href="https://www.facebook.com/simon.bjornoy"
              className="opacity-75 hover:opacity-100 hover:cursor-pointer mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
          </div>
        </ul>
      </motion.span>
    </motion.div>
  );
}

export default Sidebar;
