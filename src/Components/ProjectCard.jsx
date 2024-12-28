import React from "react";
import Image from "../images/Group1588.png";

const ProjectCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6 ml-60">{/**/}
      {/* First Row (Container 1 and 2) */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Title */}
        <div className="bg-black text-white p-4 rounded-t-lg ">
          <h2 className="text-xl font-bold">Technical Project Management</h2>
        </div>

        {/* Description */}
        <div className="p-4">
          <span className="text-sm text-gray-700">
    <span className="font-bold text-black">Description:</span> Story of Alignment, Scope of Agility, Specific
            Accountable Staggering Approach
          </span>
        </div>

        {/* Image */}
        <div className="p-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/f0ce/9cbc/d249ba0bf29d70044ae2a5bb2114b8ff?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KTtgt1GZYI1z61y8ovVZmXQUPorqe36d2kZXUgBMDjkF3Iss28ZxLNCINUsIjE2ir5my9rHfHiSncwV1EAq53Aobb5NzCUP34ML98HfOfj8p36JqQ0fdJoSuNA2LcLTeda~cPqTVZH~hmSofa0WHHTLIgjWBYf2urZ8NCQ5cYIzCsFedU4iguTT5GINoFRO5QeAwuVsZmULNEPPs0rkzQl0VwXiqKRXTVVLO6OWtluxzfh86jVMvhV4VcfHWz0x4i4YyUuZrd3~azyyXAttyaL~~VV5tqgproGlMxGXCuEDu1rQY-oCpI1sWoRpXpRgWCR271fbzVoihL-ovTcC9rg__"
            alt="Project Image"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Title */}
        <div className="bg-black text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-bold">Threadbuild</h2>
        </div>

        {/* Description */}
        <div className="p-4">
          <span className="text-sm text-gray-700">
    <span className="font-bold text-black">Description:</span> Watch the video and threadbuild, and jot out key
            threads while watching the video
          </span>
        </div>

        {/* Thread Section */}
        <div className="p-4">
          <div className="text-lg font-semibold text-gray-800 mb-4">
            Thread A
          </div>

          {/* Sub Thread Containers */}
          <div className="grid grid-cols-2 gap-4">
            {/* Sub Thread 1 */}
            <div className="bg-[#5451515f] text-black p-4 rounded-lg">
              <div className="text-md font-semibold">Sub Thread 1</div>
              <textarea
                className="w-full mt-2 p-2 bg-gray-100 border border-gray-300 rounded-lg text-black"
                placeholder="Enter the text"
              />
            </div>

            {/* Sub Thread 2 */}
            <div className="bg-[#5451515f] text-black p-4 rounded-lg">
              <div className="text-md font-semibold">Sub Thread 1</div>
              <textarea
                className="w-full mt-2 p-2 bg-gray-100 border border-gray-300 rounded-lg text-black"
                placeholder="Enter the text"
              />
            </div>
          </div>


        </div>
        <div>
          <div className="w-full flex flex-col items-center mt-6">
            {/* Centered Button */}
            <button className="bg-[#0029FF] text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition duration-300 mb-4">
              + Sub-Thread
            </button>

            {/* Centered Sub Thread */}
            <div className="bg-[#5451515f] text-black p-4 rounded-lg w-1/2">
              <div className="text-md font-semibold">Summary of Thread A</div>
              <textarea
                className="w-full mt-2 p-2 bg-gray-100 border border-gray-300 rounded-lg text-black"
                placeholder="Enter the text"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Row (Container 3 and 4) */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Title */}
        <div className="bg-black text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-bold">Structure your Pointers</h2>
        </div>

        {/* Description */}
        <div className="p-4">
          <span className="text-sm text-gray-700">
    <span className="font-bold text-black">Description:</span> Write a 300 - 400 word article from your thread.
            Publish your understanding and showcase your understanding to the
            entire world.
          </span>
        </div>

        {/* Title Textbox */}
        <div className="p-4">
          <label className="block text-sm font-semibold text-gray-700">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter your title here"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Content Text */}
        <div className="p-4">
          <label className="block text-sm font-semibold text-gray-700">
            Content
          </label>
          <textarea
            placeholder="Write your content here"
            className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
            rows="4"
          />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* Title */}
        <div className="bg-black text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-bold">4SA Method</h2>
        </div>

        {/* Description */}
        <div className="p-4">
          <span className="text-sm text-gray-700">
    <span className="font-bold text-black">Description:</span> To Explore more read more
          </span>
        </div>

        {/* Introduction Section */}
        <div className=" text-black p-4 mt-4 rounded-lg">
          <h3 className="text-lg font-bold">Introduction</h3>
          <p className="text-sm mt-2">
            The 4SA Method, How to bring an idea into progress?
          </p>
        </div>

        {/* Thread A Section */}
        <div className=" text-black p-4 mt-4 rounded-lg">
          <h3 className="text-lg font-bold">Thread A</h3>
          <p className="text-sm mt-2">
            How are you going to develop your strategy? Which method are you
            going to use to develop a strategy? What if the project is lengthy?
          </p>
        </div>

        {/* Example 1 Section */}
        <div className=" text-black p-4 mt-4 rounded-lg">
          <h3 className="text-lg font-bold">Example 1</h3>
          <p className="text-sm mt-2">
            You have a concept, How will you put it into progress?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
