import React from "react";
import Sidebar from "./Sidebar";
import HomeSection from "./HomeSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";

function App() {
  return (
    <div className="w-screen h-screen text-gray-300 subpixel-antialiased">
      <Sidebar />
      <div className="inline-block right-0 w-3/4 h-screen pl-10 absolute">
        <HomeSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
