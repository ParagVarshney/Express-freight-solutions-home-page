import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-700">
          Express Freight Solutions
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#about" className="hover:text-blue-600">About Us</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#industries" className="hover:text-blue-600">Industries</a>
          <a href="#why" className="hover:text-blue-600">Why Choose Us</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* CTA button (Desktop) */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
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
            <a href="#about" className="hover:text-blue-600">About Us</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#industries" className="hover:text-blue-600">Industries</a>
            <a href="#why" className="hover:text-blue-600">Why Choose Us</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center"
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
