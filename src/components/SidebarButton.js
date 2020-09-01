import React from "react";
import { Link } from "react-scroll";

function SidebarButton({ title }) {
  return (
    <Link
      to={title}
      activeClass="active"
      spy={true}
      smooth={true}
      duration={1000}
      offset={0}
      className="block w-full focus:outline-none text-gray-500 text-left pl-10 py-1 border-r-4 border-transparent hover:text-gray-300 hover:border-yellow-500"
    >
      <li className="text-2xl">{title}</li>
    </Link>
  );
}

export default SidebarButton;
