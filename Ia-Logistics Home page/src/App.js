import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Industries from "./components/Industries";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <About />
      <Industries />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}
