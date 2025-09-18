import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // 👈 import Link

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
          <Link to="/aboutus" className="hover:text-blue-600 transition">About Us</Link>
          <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link to="/industries" className="hover:text-blue-600 transition">Industries</Link>
          <Link to="/why" className="hover:text-blue-600 transition">Why Choose Us</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </nav>

        {/* CTA button (Desktop) */}
        <Link
          to="/contact"
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Get a Quote
        </Link>

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
            <Link to="/about" className="hover:text-blue-600 transition">About Us</Link>
            <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
            <Link to="/industries" className="hover:text-blue-600 transition">Industries</Link>
            <Link to="/why" className="hover:text-blue-600 transition">Why Choose Us</Link>
            <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg text-center hover:bg-blue-700 transition"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
