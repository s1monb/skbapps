import React from "react";
import SidebarButton from "./SidebarButton";

function Sidebar() {
  return (
    <div className="w-1/4 border-r border-gray-700 h-screen inline-block fixed top-0">
      {/* Header section */}
      <button></button>
      <div className="mt-8 ml-6">
        <img
          src="/img/simon.png"
          width="150px"
          alt="Developer Simon Kinn Bjørnøy"
        />

        <h1 className="font-bold text-3xl mt-2">Simon K. Bjørnøy</h1>
      </div>

      {/* Links */}
      <ul className="mt-10">
        <SidebarButton title="Home" />
        <SidebarButton title="Projects" />
        <SidebarButton title="Skills" />
        <SidebarButton title="Contact" />
      </ul>

      {/* Icons */}
      <ul className="absolute bottom-0 flex flex-wrap justify-between text-3xl px-40 my-10 text-gray-400 w-full">
        <a href="/" className="hover:text-white hover:cursor-pointer">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="/" className="hover:text-white hover:cursor-pointer">
          <i className="fab fa-github-square"></i>
        </a>
        <a href="/" className="hover:text-white hover:cursor-pointer">
          <i className="fab fa-linkedin"></i>
        </a>
      </ul>
    </div>
  );
}

export default Sidebar;
