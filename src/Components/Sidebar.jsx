// import React, { useState } from 'react';
// import { FaBars, FaHome, FaSearch, FaBell, FaUser, FaCog } from 'react-icons/fa';
import React, { useState } from 'react';

const Sidebar = ({ isExpanded, toggleSidebar }) => {
  

  return (
    <div
      className={`fixed top-0 left-0 ${isExpanded ? "w-64" : "w-16"} h-full bg-gray-800 text-white transition-all duration-300 mt-16`}
    >
      <button
        onClick={toggleSidebar}
        className="absolute top-4 right-0 text-xl text-white p-2 focus:outline-none"
      >
        {isExpanded ? "←" : "→"}
      </button>
      <div className="mt-16">
        {/* Sidebar content here */}
      </div>
    </div>
  );
};

export default Sidebar;