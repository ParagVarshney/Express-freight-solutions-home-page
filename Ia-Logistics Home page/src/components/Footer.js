import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white text-center p-6">
      <p>© {new Date().getFullYear()} Express Freight Solutions. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

