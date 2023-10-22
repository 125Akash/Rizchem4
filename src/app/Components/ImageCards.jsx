import React from "react";
import Image from "next/image";

const Imagecards = () => {
  return (
    <div className="flex bg-slate-200 rounded-3xl ml-20 mr-16 mb-10 mt-10 relative overflow-x-hidden">
      {/* First Section */}
      <div>
        <h2 className="text-4xl font-semibold w-4/5 m-12">
          Explore top 15 Features
        </h2>
        <p className="w-full mt-6 ml-32 font-semibold">Features</p>
        <p className="w-full mt-6 ml-20 font-semibold">
          Stay in the loop with real-time market alerts and notifications that
          help you react to market developments
        </p>
        <button className="mt-6 ml-10 font-semibold bg-blue-500 hover:bg-blue-600 text-white text-sm border border-1 border-blue-900 px-4 py-2 rounded-full transform transition-transform hover:scale-105">
          Learn More &#x27A4;
        </button>
      </div>

      {/* Second Section */}
      <div className="flex space-x-4 p-0">
        <div className="items-center py-4 relative group">
          <img
            src="/assests/lab.png"
            alt="Vertical Image"
            className="ml-28 w-64 h-80 rounded-3xl transform transition-transform group-hover:scale-105"
          />
          <div className="absolute transform translate-x-28 top-0 left-0 mt-6 mb-6 right-0 bottom-0 bg-black opacity-50 rounded-3xl flex flex-col text-white group-hover:opacity-100 transition-opacity duration-300">
            <button className="m-2 bg-slate-100 text-xs font-semibold rounded-3xl text-blue-900 px-6 py-2 w-20">
              Name
            </button>
            <h2 className="text-4xl font-semibold m-6 mt-56 text-orange-600 group-hover:opacity-100 transition-opacity duration-300">
              #Slogan
            </h2>
          </div>
        </div>

        {/* Third Section */}
        <div className="py-4 relative group">
          <img
            src="/assests/lab.png"
            alt="Vertical Image"
            className="ml-28 w-64 h-80 rounded-3xl transform transition-transform group-hover:scale-105"
          />
          <div className="absolute transform translate-x-28 top-0 left-0 mt-6 mb-6 right-0 bottom-0 bg-black opacity-50 rounded-3xl flex flex-col text-white group-hover:opacity-100 transition-opacity duration-300">
            <button className="m-2 bg-slate-100 text-xs font-semibold rounded-3xl text-blue-900 px-6 py-2 w-20">
              Name
            </button>
            <h2 className="text-4xl font-semibold m-6 mt-56 text-orange-600 group-hover:opacity-100 transition-opacity duration-300">
              #Slogan
            </h2>
          </div>
        </div>

        {/* Fourth Section */}
        <div className="py-4 relative mr-6 group">
          <img
            src="/assests/lab.png"
            alt="Vertical Image"
            className="ml-28 w-64 h-80 rounded-3xl transform transition-transform group-hover:scale-105"
          />
          <div className="absolute transform translate-x-28 top-0 left-0 mt-6 mb-6 right-0 bottom-0 bg-black opacity-50 rounded-3xl flex flex-col text-white group-hover:opacity-100 transition-opacity duration-300">
            <button className="m-2 bg-slate-100 text-xs font-semibold rounded-3xl text-blue-900 px-6 py-2 w-20">
              Name
            </button>
            <h2 className="text-4xl font-semibold m-6 mt-56 text-orange-600 group-hover:opacity-100 transition-opacity duration-300">
              #Slogan
            </h2>
          </div>
        </div>
      </div>
      {/* Fifth Section for Slider Controls */}
      <div className="w-1/5"></div>
    </div>
  );
};

export default Imagecards;
