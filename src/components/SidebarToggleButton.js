import React from "react";

function SidebarButton({ toggle, isOpen }) {
  return (
    <div
      id="nav-icon4"
      onClick={toggle}
      className={
        isOpen ? "open float-right mr-8 opacity-75" : "mx-auto  opacity-75"
      }
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default SidebarButton;
