import React, { useState } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import TechnicalProject from "./Components/TechnicalProject";
import ProjectCard from "./Components/ProjectCard";
import FixedImages from "./Components/FixedImages";

function App() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  return (
    <div className="App flex h-screen">
      {/* Sidebar */}
      <Sidebar
        isExpanded={isSidebarExpanded}
        toggleSidebar={() => setIsSidebarExpanded(!isSidebarExpanded)}
      />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ml-${
          isSidebarExpanded ? "64" : "16"
        }`}
      >
        <Header />
        <TechnicalProject />
        <ProjectCard />
        <FixedImages />
      </div>
    </div>
  );
}

export default App;
