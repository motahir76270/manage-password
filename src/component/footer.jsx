import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2 flex items-center justify-center md:justify-start">
              <span className="text-green-400">&lt;</span>
              Pass
              <span className="text-green-400">OP/&gt;</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              Your secure password manager for storing and managing all your credentials safely.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-6 md:mb-0">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-400 transition">FAQ</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="https://github.com/motahir76270" className="text-gray-400 hover:text-green-400 transition text-xl">
                  <FaGithub />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition text-xl">
                  <FaTwitter />
                </a>
                <a href="https://www.linkedin.com/in/mohammad-tahir-a0a150273/" className="text-gray-400 hover:text-green-400 transition text-xl">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition text-xl">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PassOP. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;