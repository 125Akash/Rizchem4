"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [navBackground, setNavBackground] = useState("transparent");

 const listenScrollEvent = () => {
    if (window.scrollY > 50) {
      setNavBackground("slate-200");
    } else {
      setNavBackground("transparent");
    }
 };

 useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
 }, []);

  return (
    <div className={`sticky top-0 z-50 bg-${navBackground} transition-all duration-300 ml-4 mr-4 rounded-b-lg mt-3 overflow-x-hidden`}>
      <nav className="container mx-auto p-2 py-1 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/assests/Logo.png"
            width={150}
            height={60}
            alt="Logo"
            className="ml-6 transform hover:scale-110 transition-transform duration-100"
          />
        </div>
        <ul className="hidden list-none lg:flex lg:list-none space-x-6 ">
          <li className="hover:text-blue-800 transform hover:scale-110 transition-transform duration-100">
            <Link
              href="#solutions"
              className="text-blue-900 font-semibold text-sm"
            >
              Solutions
            </Link>
          </li>
          <li className="hover:text-blue-800 transform hover:scale-110 transition-transform duration-100">
            <Link
              href="#solutions"
              className="text-blue-900 font-semibold text-sm"
            >
              Technology
            </Link>
          </li>
          <li className="hover:text-blue-800 transform hover:scale-110 transition-transform duration-100">
            <Link
              href="#solutions"
              className="text-blue-900 font-semibold text-sm"
            >
              Company
            </Link>
          </li>
          <li className="hover:text-blue-800 transform hover:scale-110 transition-transform duration-100">
            <Link
              href="#solutions"
              className="text-blue-900 font-semibold text-sm"
            >
              Stories
            </Link>
          </li>
          <li className="hover:text-blue-800 transform hover:scale-110 transition-transform duration-100"> 
            <Link
              href="#solutions"
              className="text-blue-900 font-semibold text-sm"
            >
              Resources
            </Link>
          </li>
          <li className="hover:text-blue-800 transform hover:scale-110 transition-transform duration-100">
            <Link
              href="#solutions"
              className="text-blue-900 font-semibold text-sm mr-6"
            >
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
