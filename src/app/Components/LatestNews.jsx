import React from "react";
import Image from "next/image";

const LatestNews = () => {
  return (
    <>
      <section className="mb-16 ml-4 mt-16">
        <div className="relative">
          <div className="h-96 lg:h-80 xl:h-96 relative ml-4 lg:ml-16 mr-4 lg:mr-16 mt-4 lg:mt-10 ">
            <Image
              src="/assests/slider5.jpg"
              width={3000}
              height={0}
              alt="Latest News"
              className="w-full h-full mb-8 rounded-xl object-cover transition-all duration-100 hover:scale-105 overflow-y-hidden"
            />
          </div>
          <div className="absolute top-28 mt-10 ml-6 lg:ml-96 left-6 lg:left-96 transform w-96 lg:w-80 xl:w-96 h-80 lg:h-72 xl:h-80 mb-24 rounded-xl bg-white p-6 text-black">
            <h1 className="text-xl lg:text-2xl xl:text-xl ml-4 font-bold w-4/5">
              Unlocking the Genetic Puzzle: A Case Study in Personalized Cancer Therapy
            </h1>
            <p className="mt-6 w-4/5 ml-4 text-xs lg:text-sm xl:text-xs font-normal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam inventore hic iure error labore sint voluptate dolore soluta, est similique commodi, numquam minima aut quia unde nisi. Sit, labore culpa!
            </p>
            <button className="mt-6 font-semibold bg-blue-500 hover:bg-blue-600 text-white text-sm border border-1 border-blue-900 px-4 py-2 rounded-full transform transition-transform hover:scale-105">
              Read Case Study &#x27A4;
            </button>
          </div>
        </div>
      </section>

      {/* Section -2 */}

      <section className="mb-16 ml-4 mt-28 lg:mt-28">
        <div className="flex">
          {/* First Section with Vertical Image */}
          <div className="flex justify-start items-center">
            <img
              src="/assests/lab.png"
              alt="Vertical Image"
              className="ml-6 lg:ml-16 w-96 lg:w-80 h-fit rounded-3xl transform transition-transform hover:scale-105"
            />
          </div>
          {/* Second Section with Heading, Paragraph, and Button */}
          <div className="w-1/2 lg:w-2/3 ml-6 lg:ml-40 mt-10 mr-12">
            <h1 className="text-4xl lg:text-5xl xl:text-4xl font-bold">
              Pioneering the Future of Genomics
            </h1>
            <p className="text-sm font-semibold ml-2 mt-8 text-slate-600">
              ABOUT
            </p>
            <hr className="m-2 ml-2 mr-4" />
            <div className="flex flex-col lg:flex-row justify-center px-5 items-center">
              <p className="mt-2 text-sm font-normal lg:w-1/2 xl:w-full lg:mr-7 xl:mr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, eos odio enim voluptas possimus aliquid. Quis sapiente similique, explicabo, nemo rem repellat ut natus dolorem totam saepe facere! Iure, illo!.
              </p>
              <p className="mt-2 text-sm font-normal lg:w-1/2 xl:w-full lg:ml-7 xl:ml-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quos placeat veniam odit iste, deserunt temporibus libero quo distinctio dolorem, doloribus voluptate possimus magnam nulla reprehenderit dolores voluptates velit? Rerum.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center px-5 items-center">
              <p className="mt-2 text-sm font-normal lg:w-1/2 xl:w-full lg:mr-7 xl:mr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, eos odio enim voluptas possimus aliquid. Quis sapiente similique, explicabo, nemo rem repellat ut natus dolorem totam saepe facere! Iure, illo!.
              </p>
              <p className="mt-2 text-sm font-normal lg:w-1/2 xl:w-full lg:ml-7 xl:ml-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quos placeat veniam odit iste, deserunt temporibus libero quo distinctio dolorem, doloribus voluptate possimus magnam nulla reprehenderit dolores voluptates velit? Rerum.
              </p>
            </div>
            <button className="mt-6 font-semibold ml-6 bg-blue-500 hover:bg-blue-600 text-white text-sm border border-1 border-blue-900 px-4 py-2 rounded-full transform transition-transform hover:scale-105">
              Learn More &#x27A4;
            </button>
          </div>
        </div>
      </section>

      {/* Section-3 */}
      <section className="mt-8">
      <div>
        <p className="text-xs font-semibold ml-4 lg:ml-20 mt-8 text-slate-600">
          LATEST NEWS
        </p>
        <hr className="ml-4 lg:ml-20 mt-2 mr-4 lg:mr-16" />
        <div className="flex flex-row justify-around space-x-6 space-y-4 lg:space-y-0 lg:space-x-4 rounded-lg ml-4 lg:ml-10 mt-4 mr-6 lg:mr-20 bg-white p-1">
          {/* Section 1 */}
          <div className="relative ml-4 lg:ml-6 w-full lg:w-1/4">
            <div className="line"></div> {/* Add a div for the line */}
            <Image
              src="/assests/Blog1.jpg"
              width={300}
              height={0}
              alt="Blog Image"
              className="ml-4 w-full h-auto lg:h-48 rounded-2xl transform transition-transform hover:scale-105"
            />
            <div className="p-3">
              <p className="text-xs font-semibold text-slate-500 ml-4 lg:ml-5">
                September 15, 2023
              </p>
              <div className="mb-1 w-4/5 text-xs lg:text-xs font-semibold ml-4 lg:ml-5 mt-2">
                Geneticus Breakthrough Revolutionizes DNA Sequencing Technology
              </div>
            </div>
          </div>
          {/* Section 2 */}
          <div className="relative ml-4 lg:ml-6 w-full lg:w-1/4">
            <div className="line"></div> {/* Add a div for the line */}
            <Image
              src="/assests/Blog2.jpg"
              width={300}
              height={0}
              alt="Blog Image"
              className="ml-4 w-full h-auto lg:h-48 rounded-2xl transform transition-transform hover:scale-105"
            />
            <div className="p-3">
              <p className="text-xs font-semibold text-slate-500 ml-4 lg:ml-5">
                September 15, 2023
              </p>
              <div className="mb-1 w-4/5 text-xs lg:text-xs font-semibold ml-4 lg:ml-5 mt-2">
                Geneticus Breakthrough Revolutionizes DNA Sequencing Technology
              </div>
            </div>
          </div>
          {/* Section 3 */}
          <div className="relative ml-4 lg:ml-6 w-full lg:w-1/4">
            <div className="line"></div> {/* Add a div for the line */}
            <Image
              src="/assests/slider2.jpg"
              width={300}
              height={0}
              alt="Blog Image"
              className="ml-4 w-full h-auto lg:h-48 rounded-2xl transform transition-transform hover:scale-105"
            />
            <div className="p-3">
              <p className="text-xs font-semibold text-slate-500 ml-4 lg:ml-5">
                September 15, 2023
              </p>
              <div className="mb-1 w-4/5 text-xs lg:text-xs font-semibold ml-4 lg:ml-5 mt-2">
                Geneticus Breakthrough Revolutionizes DNA Sequencing Technology
              </div>
            </div>
          </div>
          {/* Section 4 */}
          <div className="relative ml-4 lg:ml-6 w-full lg:w-1/4">
            <div className="line"></div> {/* Add a div for the line */}
            <Image
              src="/assests/slider3.jpg"
              width={300}
              height={0}
              alt="Blog Image"
              className="ml-4 w-full h-auto lg:h-48 rounded-2xl transform transition-transform hover:scale-105"
            />
            <div className="p-3">
              <p className="text-xs font-semibold text-slate-500 ml-4 lg:ml-5">
                September 15, 2023
              </p>
              <div className="mb-1 w-4/5 text-xs lg:text-xs font-semibold ml-4 lg:ml-5 mt-2">
                Geneticus Breakthrough Revolutionizes DNA Sequencing Technology
              </div>
            </div>
          </div>
          {/* ... (Repeat for other sections) */}
        </div>
      </div>
    </section>
    </>
  );
};

export default LatestNews;
