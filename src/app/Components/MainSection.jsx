import React from "react";
import Link from "next/link";
const MainSection = () => {
  const backgroundImageUrl = "./assests/slider5.jpg";

  const containerStyle = {
    backgroundImage: `linear-gradient(to left, rgba(206, 210, 212, 1), rgba(141, 183, 196, 0.8), rgba(8, 96, 116, 0.9)), url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div
        className="relative ml-4 mr-4 rounded-lg mt-4 -top-16"
        style={containerStyle}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center py-14 overflow-x-hidden">
          <div className="text-center lg:w-2/6 mt-14">
            <h1 className="text-5xl mt-20 font-semibold text-blue-900 hover:text-blue-800 transition duration-300">
              Unlocking the Secrets of Life
            </h1>
            <p className="text-sm font-semibold mt-4 text-blue-900">
              Our Mission is to Pioneer the Future of genomics by delivering
              cutting-edge DNA sequencing solutions
            </p>
            <Link href="#slider">
              <button className=" mt-16 mb-32 font-semibold bg-transparent text-blue-900 text-sm border-1 border-blue-900 px-4 py-2 rounded-full transform transition-transform hover:scale-105">
                Learn More &#x27A4;
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="-mt-10 mb-2 ">
        <div className="flex flex-col lg:flex-row justify-between rounded-lg ml-4 mr-4 bg-slate-200 ">
          {/* Section 1 */}
          <div className="relative ml-4 mb-2 lg:mb-0">
            <div className="p-3">
              <div className="border-l border-blue-900 absolute ml-4 h-12 mt-4 left-0 top-0 "></div>
              <div className="mb-1 ml-4 text-sm font-semibold">
                Geneticus Breakthrough Revolutionizes DNA Sequencing Technology
              </div>
              <p className="text-xs ml-4 font-semibold text-slate-500">
                September 15, 2023
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="relative ml-4 mb-2 lg:mb-0">
            <div className="p-3">
              <div className="border-l border-blue-900 absolute h-12 mt-4 left-0 top-0 "></div>
              <div className="mb-1 text-sm font-semibold">
                Geneticus Launches Educational Outreach Program to Foster
                Genomic Literacy
              </div>
              <p className="text-xs font-semibold text-slate-500">
                September 5, 2023
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="relative ml-4">
            <div className="p-3">
              <div className="border-l border-blue-900 absolute h-12 mt-4 left-0 top-0 "></div>
              <div className="mb-2 text-sm font-semibold">
                Geneticus Collaborates with Leading Cancer Research Center
              </div>
              <p className="mb-1 text-xs font-semibold text-slate-500">
                September 10, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
