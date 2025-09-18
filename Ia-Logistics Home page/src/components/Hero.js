import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-photo/cargo-ship-full-containers-sailing-sea_335224-736.jpg",
    title: "Dubai’s Full Service Logistics Provider",
    subtitle:
      "Fast, reliable, and cost-effective freight solutions with global reach and local expertise.",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/industrial-port-container-yard_1112-12087.jpg",
    title: "Transport Your Goods Around The World",
    subtitle:
      "Seamless shipping services across air, sea, and land with trusted expertise.",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-photo/containers-cargo-ship-sea_1112-1220.jpg",
    title: "Reliable Logistics Partner",
    subtitle:
      "We ensure your cargo moves safely, quickly, and affordably — every time.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer); // cleanup on unmount
  }, [current]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          {slides[current].title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10">
          {slides[current].subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Request a Quote
          </a>
          <a
            href="#contact"
            className="bg-white text-blue-700 px-10 py-4 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition"
          >
            Track Shipment
          </a>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/70 transition"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/70 transition"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 flex space-x-3 justify-center w-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
