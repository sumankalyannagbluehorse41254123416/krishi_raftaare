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

  // 🔥 Dynamic nav items
  const navItems = [
    { label: "Home", icon: FaHome, link: "#" },
    { label: "About", icon: FaInfoCircle, link: "#" },
    { label: "Services", icon: FaCogs, link: "#" },
    { label: "Projects", icon: FaProjectDiagram, link: "#" },
    { label: "Products", icon: FaSeedling, link: "#" },
    { label: "Contact", icon: FaPhone, link: "#" },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="bg-white shadow-md hidden md:block sticky top-0 z-40">
        <div className="container mx-auto py-4 flex justify-between items-center px-4">
          <div className="flex items-center">
            <img src="image/logo.jpg" alt="Logo" className="h-auto w-20" />
          </div>
          <nav className="flex space-x-8">
            {navItems.map(({ label, link }) => (
              <a
                key={label}
                href={link}
                className="text-black hover:text-green-600 font-semibold transition"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="bg-white shadow-md md:hidden sticky top-0 z-40">
        <div className="px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="image/logo.jpg" alt="Logo" className="h-auto w-10" />
          </div>
          <button
            onClick={toggleMenu}
            className="text-green-600 focus:outline-none"
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      </header>

      {/* 🔥 Overlay (fixed) */}
      <div
        onClick={toggleMenu}
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* 🔥 Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 bg-green-600 text-white flex justify-between items-center">
          <div className="flex items-center">
            <img src="image/logo.jpg" alt="Logo" className="h-auto w-10" />
          </div>
          <button onClick={toggleMenu} className="text-white">
            <FaTimes className="text-xl" />
          </button>
        </div>
        <nav className="flex flex-col py-4">
          {navItems.map(({ label, icon: Icon, link }) => (
            <a
              key={label}
              href={link}
              className="px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition flex items-center"
            >
              <Icon className="mr-3 text-green-500" /> {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
