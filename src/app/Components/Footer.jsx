import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-1 rounded-xl ml-4 mr-4 mb-2">
      <div className="container mx-auto p-6 flex justify-between items-center">
        <div className="flex space-x-16">
         
        <ul className="list-none p-2 m-0 ml-8">
            <li>
              <Link href="/" className="text-white text-sm font-semibold">
                Quick Links
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
               Solutions
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
              Technology
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
               Company
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
             Stories
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
              Resources
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
            Support
              </Link>
            </li>
          </ul>
          <ul className="list-none p-2 m-0">
            <li>
              <Link href="/" className="text-white text-sm font-semibold">
                Solutions
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
                Next-Generation Sequencing (NGS)
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
              Single Molecule Real Time Sequencing (SMRT)
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
                Sanger-Sequencing
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
               Oxford Nanopore Sequencing
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
              PyroSequencing
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
              Nanopore Cascade Sequencing(NCS)
              </Link>
            </li>
          </ul>

          <ul className="list-none p-2 m-0">
            <li>
              <Link href="/" className="text-white text-sm font-semibold">
                Technology
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
                Illumina Seqencing Technology
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
              NanoProbe Sequencing Technology
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
               Quantum Genomics Analytics (QGA)
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
             CRISPR-Seq Integration (CSI)
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
              In Vivo Sequencing Implants (IVSI)
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
              Metagenomic Matrix Mapping (M3)
              </Link>
            </li>
          </ul>
         
          <ul className="list-none p-2 m-0 mr-80">
            <li>
              <Link href="/" className="text-white text-sm font-semibold">
               Company
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
              About Us
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
             Contact 
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
                News & Events
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
              Blogs
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
               Careers
              </Link>
            </li>
            <li>
              <Link href="/" className="text-white text-xs font-semibold hover:text-blue-500">
             Investors
              </Link>
            </li>
          </ul>
         
        </div>

            
           <aside className=' flex justify-evenly items-center space-x-6 mt-60 '>
            
          <Link href="https://www.facebook.com/yourpage"> <FaFacebook className="text-blue-500 text-2xl hover:text-blue-700" /></Link>
        
          
          <Link href="https://www.instagram.com/yourpage"
          >
            <FaInstagram className="text-pink-500 text-2xl hover:text-pink-700" />
          </Link>
         
          <Link
            href="https://www.linkedin.com/in/yourprofile"
            
          >
            <FaLinkedin className="text-blue-500 text-2xl hover:text-blue-700" />
          </Link>
          <p className="text-xs font-light w-auto">United States (Enlish)</p>
          </aside>
         
      </div>
     <p className='text-white font-semibold text-xs ml-4 mb-4'>&#xa9; RIZCHEM inc (2023). All Rights Reveserved </p>
    </footer>
  );
};

export default Footer;
