import React from "react";

function SidebarButton({ title, focused }) {
  if (focused) {
    return (
      <a
        href={"#" + title}
        className="block w-full focus:outline-none text-left pl-10 py-1 border-r-4 border-transparent border-yellow-500"
      >
        <li className="text-2xl">{title}</li>
      </a>
    );
  } else {
    return (
      <a
        href={"#" + title}
        className="block w-full focus:outline-none text-gray-500 text-left pl-10 py-1 border-r-4 border-transparent hover:text-gray-300 hover:border-yellow-500"
      >
        <li className="text-2xl">{title}</li>
      </a>
    );
  }
}

export default SidebarButton;
