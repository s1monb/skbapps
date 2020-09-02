import React from "react";

function SidebarButton({ toggle, isOpen }) {
  return (
    <div
      id="nav-icon4"
      onClick={toggle}
      className={
        isOpen ? "open float-right opacity-75" : "float-right opacity-75"
      }
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default SidebarButton;
