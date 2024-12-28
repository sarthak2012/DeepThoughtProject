import React from 'react';

const TechnicalProjectManagement = () => {
  return (
    <div className="mt-16 px-6 ml-10" > {/**/}
      {/* Top Section: Title and Button */}
      <div className="flex justify-between items-center">
        {/* Left Section: Text */}
        <h1 className="text-4xl font-extrabold text-[#0029FF] font-poppins">
          Technical Project Management
        </h1>

        {/* Right Section: Button */}
        <button className="bg-[#0029FF] text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition duration-300">
          Submit Task
        </button>
      </div>

      {/* New Section: Background color #E9ECEF */}
      <div className="bg-[#E9ECEF] mt-8 p-6">
        {/* Title Text */}
        <h2 className="text-black text-xl font-bold">
          Explore the world of management
        </h2>

        {/* Paragraph Text */}
        <p className="text-black text-sm font-normal mt-2">
          As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling, and completion. How? Do you want to manage each and every step of your project?
        </p>
      </div>
    </div>
  );
};

export default TechnicalProjectManagement;
