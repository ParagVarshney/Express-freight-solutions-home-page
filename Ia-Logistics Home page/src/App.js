import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Industries from "./components/Industries";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";

export default function App() {
  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      <Header />
      <div className="pt-20">
        <Routes>
          {/* ✅ Home Page = your old full layout */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <About />
                <Industries />
                <WhyChooseUs />
                <Contact />
              </>
            }
          />

          {/* ✅ Separate Pages */}
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/why" element={<WhyChooseUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
