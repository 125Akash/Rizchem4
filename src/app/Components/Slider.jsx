"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "../globals.css";

const Slider = () => {
  const images = [
    "./assests/slider1.jpg",
    "./assests/Che2.jpg",
    "./assests/che1.jpg",
    "./assests/slider5.jpg",
    // Add more image URLs here
  ];

  const imageInfo = [
    {
      title: "Illumina Sequencing Technology",
      description:
        "Illumina sequencing technology is a leading platform for high-throughput DNA sequencing. It is renowned for its exceptional accuracy, efficiency, and versatility.",
    },
    {
      title: "lorem ipsum dolor sit amet consectetur ",
      description:
        "lorem ipsum dolor sit amet c iure error labore sint voluptate dolore soluta, est similique commodi, numquam minima aut quia unde nisi. Sit, labore culpa!",
    },
    {
      title: "lorem ipsum dolor sitr adipisicing elit",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Nam inventore hic iure error labore sint voluptate dolore soluta, est similique commodi",
    },
    {
      title: "lorem i amet consectetur adipisicing elit",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Nam inventore hic iure error labore sint voluptate dolore soluta, est similique commodi lorem ipsum ore",
    },
    {
      title: "lorem dolor sit amet consectetur adipisicing elit",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Nam inventore hic iure error labore sint voluptate dolore soluta, est simabore",
    },
   
    // Add more info for each image
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const playSlider = () => {
    const interval = setInterval(() => {
      nextImage();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  };

  useEffect(() => {
    const autoPlay = playSlider();

    return () => {
      autoPlay();
    };
  }, [currentImage]);

  return (
    <>
      <p className="text-xs font-semibold ml-20 mt-16 text-slate-600">
        POPULAR TECHNOLOGIES
      </p>
      <div id="slider" className="h-96 relative ml-20 mr-16 mt-4">
        <div className="absolute inset-0 flex flex-col justify-center items-start rounded-xl w-2/6 h-72 mt-52 m-20 text-white bg-slate-950">
          {imageInfo[currentImage] && (
            <>
              <h1 className="text-2xl font-bold m-9 mb-4 transition-all duration-500">
                {imageInfo[currentImage].title}
              </h1>
              <p className="text-sm font-semibold ml-9 mt-2 w-4/5 transition-all duration-500">
                {imageInfo[currentImage].description}
              </p>
            </>
          )}
          <button className="mt-4 m-9 text-sm font-semibold bg-blue-800 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform">
            Learn More &#x27A4;
          </button>
        </div>

        <img
          src={images[currentImage]}
          alt="Slider Image"
          className="w-full h-full rounded-xl object-cover transition-all duration-200"
        />
        <div className="relative mt-6 ml-96 left-96 transform translate-x-48 -mr-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start">
            <button
              onClick={prevImage}
              className="text-black border border-gray-950 bg-white rounded-full p-2 lg:mr-4"
            >
              <Image src="/assests/Left_arrows.png" width={25} height={25} alt="Left" />
            </button>
            <div className="indicators flex px-1 mt-4 space-x-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`indicator ${currentImage === idx ? "indicator-active" : "indicator-inactive"}`}
                  onClick={() => setCurrentImage(idx)}
                ></button>
              ))}
            </div>
            <button
              onClick={nextImage}
              className="text-black border border-gray-950 bg-white rounded-full p-2 lg:ml-4"
            >
              <Image src="/assests/Right_arrow.png" width={25} height={25} alt="Right" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
