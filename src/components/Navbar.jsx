import { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-3 shadow-md bg-white fixed w-full z-20">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/images/logo.png" alt="Logo" className="h-8" />
        <span className="font-bold text-pink-600 text-lg">Sweet Escape</span>
      </div>

      {/* Menu (Desktop) */}
      <ul className="hidden md:flex gap-6 text-gray-700 text-sm">
        <li className="hover:text-pink-600 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-pink-600 cursor-pointer">
          <Link to="/about">About Us</Link>
        </li>
        <li className="hover:text-pink-600 cursor-pointer">
          <Link to="/package">Package</Link>
        </li>
        <li className="hover:text-pink-600 cursor-pointer">
          <Link to="/travel-guides">Travel Guides</Link>
        </li>
        <li className="hover:text-pink-600 cursor-pointer">
          <Link to="/portfolio">Portfolio & Gallery</Link>
        </li>
      </ul>

      {/* Button (Desktop) */}
      <div className="hidden md:flex">
        <button className="px-4 py-1.5 text-sm bg-white text-pink-600 rounded-full border border-pink-600 
          hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-colors duration-300 flex items-center gap-2">
          Cek Poin Membership <FaStar className="text-white text-xs" />
        </button>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes className="text-pink-600 text-2xl" /> : <FaBars className="text-pink-600 text-2xl" />}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-10 md:hidden" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Slide-In dari kanan, pas di bawah navbar */}
      <div
        className={`fixed top-12 right-0 h-[calc(100vh-3rem)] w-64 bg-white shadow-lg transform transition-transform duration-300 z-20 md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"} overflow-y-auto `}
      >
        <ul className="flex flex-col mt-2 px-6 space-y-4 text-left text-gray-700 text-sm">
          <li className="hover:text-pink-600 cursor-pointer" onClick={() => setIsOpen(false)}>
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-pink-600 cursor-pointer" onClick={() => setIsOpen(false)}>
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-pink-600 cursor-pointer" onClick={() => setIsOpen(false)}>
            <Link to="/package">Package</Link>
          </li>
          <li className="hover:text-pink-600 cursor-pointer" onClick={() => setIsOpen(false)}>
            <Link to="/travel-guides">Travel Guides</Link>
          </li>
          <li className="hover:text-pink-600 cursor-pointer" onClick={() => setIsOpen(false)}>
            <Link to="/portfolio">Portfolio & Gallery</Link>
          </li>
        </ul>
        <div className="px-6 mt-4 flex flex-col gap-3">
          <button className="w-full px-4 py-1.5 text-sm bg-white text-pink-600 rounded-full border border-pink-600 
            hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-colors duration-300 flex items-center justify-center gap-2">
            Cek Poin Membership <FaStar className="text-white text-xs" />
          </button>
          {/* Close Button di bawah */}
          <button
            className="w-full px-4 py-1.5 text-sm bg-pink-600 text-white rounded-full flex justify-center items-center gap-2 hover:bg-pink-700 transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            Tutup <FaTimes className="text-white text-xs" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
