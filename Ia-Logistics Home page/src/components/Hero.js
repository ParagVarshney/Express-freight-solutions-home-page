import React from "react";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://lpsonline.sas.upenn.edu/sites/default/files/2024-06/plpso-feature-global-comm.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 opacity-70 animate-gradient-x"></div>

      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500 rounded-full opacity-30 animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-pink-500 rounded-full opacity-20 animate-spin-slow"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-300 drop-shadow-lg">
          Dubai’s Full Service Logistics Provider
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 mt-6 leading-relaxed px-2">
          Fast, reliable, and cost-effective freight solutions with global reach
          and local expertise.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition transform duration-300"
          >
            Request a Quote
          </a>
          <a
            href="#contact"
            className="bg-white/90 backdrop-blur text-blue-700 px-10 py-4 rounded-2xl font-semibold shadow-lg hover:bg-white hover:scale-105 transition transform duration-300"
          >
            Track Shipment
          </a>
        </div>
      </div>

      {/* Additional subtle gradient overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
    </section>
  );
};

export default Hero;
