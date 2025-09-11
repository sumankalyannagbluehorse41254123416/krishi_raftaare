"use client";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaProjectDiagram,
  FaSeedling,
  FaPhone,
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Desktop Header */}
      <header className="bg-white shadow-md hidden md:block sticky top-0 z-40">
        <div className="container mx-auto py-4 flex justify-between items-center px-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-2xl mr-2">
              A
            </div>
            <span className="text-xl font-bold text-green-600">AgriOx</span>
          </div>
          <nav className="flex space-x-8">
            <a href="#" className="text-black hover:text-green-600 font-semibold transition">Home</a>
            <a href="#" className="text-black hover:text-green-600 font-semibold transition">About</a>
            <a href="#" className="text-black hover:text-green-600 font-semibold transition">Services</a>
            <a href="#" className="text-black hover:text-green-600 font-semibold transition">Projects</a>
            <a href="#" className="text-black hover:text-green-600 font-semibold transition">Products</a>
            <a href="#" className="text-black hover:text-green-600 font-semibold transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="bg-white shadow-md md:hidden sticky top-0 z-40">
        <div className="px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-2xl mr-2">
              A
            </div>
            <span className="text-xl font-bold text-green-600">AgriOx</span>
          </div>
          <button onClick={toggleMenu} className="text-green-600 focus:outline-none">
            <FaBars className="text-2xl" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={toggleMenu}
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          menuOpen ? "bg-opacity-50 visible" : "bg-opacity-0 invisible"
        }`}
      ></div>

      {/* Mobile Menu (Slide) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 bg-green-600 text-white flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-green-600 font-bold text-xl mr-2">
              A
            </div>
            <span className="text-lg font-bold">AgriOx</span>
          </div>
          <button onClick={toggleMenu} className="text-white">
            <FaTimes className="text-xl" />
          </button>
        </div>
        <nav className="flex flex-col py-4">
          <a href="#" className="px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition flex items-center">
            <FaHome className="mr-3 text-green-500" /> Home
          </a>
          <a href="#" className="px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition flex items-center">
            <FaInfoCircle className="mr-3 text-green-500" /> About
          </a>
          <a href="#" className="px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition flex items-center">
            <FaCogs className="mr-3 text-green-500" /> Services
          </a>
          <a href="#" className="px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition flex items-center">
            <FaProjectDiagram className="mr-3 text-green-500" /> Projects
          </a>
          <a href="#" className="px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition flex items-center">
            <FaSeedling className="mr-3 text-green-500" /> Products
          </a>
          <a href="#" className="px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition flex items-center">
            <FaPhone className="mr-3 text-green-500" /> Contact
          </a>
        </nav>
      </div>
    </>
  );
}
