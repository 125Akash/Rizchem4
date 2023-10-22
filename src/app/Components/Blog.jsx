import React from "react";
import LatestNews from "./LatestNews";
import Image from "next/image";

const Blog = () => {
  return (
    <>
      <section className="mt-20 lg:mt-36 ml-4 lg:ml-16 mr-4 lg:mr-12 overflow-x-hidden">
        <p className="text-xs font-semibold ml-4 mt-8 text-slate-600">BLOGS</p>
        <hr className="ml-4 mt-2 mb-2 mr-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-2">
          {/* Blog Item 1 */}
          <div className="bg-white p-2 rounded-lg">
            <Image
              src="/assests/slider4.jpg"
              width={500}
              height={0}
              alt="Image 3"
              className="h-48 object-cover rounded-2xl transform transition-transform hover:scale-105"
            />
            <h1 className="text-xl font-bold mt-2">
              Demystifying DNA Sequencing
            </h1>
            <p className="text-xs font-semibold mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae iusto est officia dolore quod magnam quasi distinctio
              qui excepturi inventore minima repellendus ratione explicabo
              optio, voluptatibus expedita dolor quidem vitae?
            </p>
            <button className="mt-6 font-semibold bg-blue-500 hover:bg-blue-600 text-white text-sm border border-1 border-blue-900 px-4 py-2 rounded-full transform transition-transform hover:scale-105">
              Read More &#x27A4;
            </button>
          </div>

          {/* Blog Item 2 */}
          <div className="bg-white p-2 rounded-lg">
            <Image
              src="/assests/slider1.jpg"
              width={500}
              height={0}
              alt="Image 3"
              className="h-48 object-cover rounded-2xl transform transition-transform hover:scale-105"
            />
            <h1 className="text-xl font-bold mt-2">
              Demystifying DNA Sequencing
            </h1>
            <p className="text-xs font-semibold mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae iusto est officia dolore quod magnam quasi distinctio
              qui excepturi inventore minima repellendus ratione explicabo
              optio, voluptatibus expedita dolor quidem vitae?.
            </p>
            <button className="mt-6 font-semibold bg-blue-500 hover:bg-blue-600 text-white text-sm border border-1 border-blue-900 px-4 py-2 rounded-full transform transition-transform hover:scale-105">
              Read More &#x27A4;
            </button>
          </div>

          {/* Blog Item 3 */}
          <div className="bg-white p-2 rounded-lg">
            <Image
              src="/assests/slider2.jpg"
              width={500}
              height={0}
              alt="Image 3"
              className="h-48 object-cover rounded-2xl transform transition-transform hover:scale-105"
            />
            <h1 className="text-xl font-bold mt-2">
              Demystifying DNA Sequencing
            </h1>
            <p className="text-xs font-semibold mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae iusto est officia dolore quod magnam quasi distinctio
              qui excepturi inventore minima repellendus ratione explicabo
              optio, voluptatibus expedita dolor quidem vitae?
            </p>
            <button className="mt-6 font-semibold bg-blue-500 hover:bg-blue-600 text-white text-sm border border-1 border-blue-900 px-4 py-2 rounded-full transform transition-transform hover:scale-105">
              Read More &#x27A4;
            </button>
          </div>
        </div>
      </section>
      <LatestNews />
    </>
  );
};

export default Blog;
