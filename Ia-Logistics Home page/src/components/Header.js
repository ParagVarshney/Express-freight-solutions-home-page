import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/express-logo.png"
            alt="Express Freight Solutions Logo"
            className="h-12 w-auto sm:h-14 md:h-16 object-contain"
          />
          <span className="text-base sm:text-lg md:text-xl font-semibold text-blue-700 ml-2">
              Express Freight Solutions
          </span>

        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#about" className="hover:text-blue-600 transition">About Us</a>
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#industries" className="hover:text-blue-600 transition">Industries</a>
          <a href="#why" className="hover:text-blue-600 transition">Why Choose Us</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* CTA button (Desktop) */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Get a Quote
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-blue-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <nav className="flex flex-col space-y-3 p-4 font-medium">
            <a href="#about" className="hover:text-blue-600 transition">About Us</a>
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#industries" className="hover:text-blue-600 transition">Industries</a>
            <a href="#why" className="hover:text-blue-600 transition">Why Choose Us</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg text-center hover:bg-blue-700 transition"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
