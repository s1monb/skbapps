import React from "react";
import { motion } from "framer-motion";

const ThemeToggleTheme = {
  light: {
    color: "white",
    backgroundColor: "black",
    transition: {
      duration: 0.4,
    },
  },
  dark: {
    color: "black",
    backgroundColor: "white",
    transition: {
      duration: 0.4,
    },
  },
};

function ThemeToggleButton({ theme, setTheme }) {
  return (
    <motion.button
      animate={theme ? "light" : "dark"}
      variants={ThemeToggleTheme}
      initial={false}
      className="focus:outline-none fixed text-2xl pt-1  right-0 m-6 hover:shadow-3xl hover:cursor-pointer rounded-full h-12 w-12 flex items-center justify-center"
      onClick={() => setTheme(!theme)}
    >
      <i className="far fa-adjust"></i>
    </motion.button>
  );
}

export default ThemeToggleButton;
