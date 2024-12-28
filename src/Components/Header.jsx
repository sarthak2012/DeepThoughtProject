import React from "react";
import { FaHome, FaSearch, FaBell, FaUser, FaCog } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-300 text-white p-4 shadow-md ">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-3 ml">
        <img
          src="https://deepthought.education/assets/images/logo/logo.svg"
          alt="DeepThought Logo"
          className="h-8"
        />
      </div>

      {/* Right Section: Icons */}
      <div className="flex items-center space-x-6">
        <FaHome className="text-xl hover:text-blue-500 cursor-pointer" />
        <FaBell className="text-xl hover:text-blue-500 cursor-pointer" />
        <FaUser className="text-xl hover:text-blue-500 cursor-pointer" />
        <FaCog className="text-xl hover:text-blue-500 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
