import React from "react";
import { ShoppingBag, Factory, Stethoscope, Cpu, Sprout } from "lucide-react";

const Industries = () => {
  const industries = [
    { title: "Retail & E-Commerce", icon: ShoppingBag },
    { title: "Manufacturing", icon: Factory },
    { title: "Healthcare", icon: Stethoscope },
    { title: "Technology", icon: Cpu },
    { title: "Agriculture", icon: Sprout },
  ];

  return (
    <section
      id="industries"
      className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white"
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h3 className="text-4xl md:text-5xl font-bold mb-6">
          Industries We Serve
        </h3>
        <p className="text-blue-100 max-w-2xl mx-auto mb-14">
          We cater to a wide range of industries with customized logistics
          solutions that ensure efficiency, reliability, and speed.
        </p>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {industries.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:bg-white hover:text-blue-800 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-white/20">
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="font-semibold">{title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
