import React from "react";
import { Plane, Ship, Truck, Warehouse, ShieldCheck, ShoppingCart } from "lucide-react";

const Services = () => {
  const services = [
    { title: "Air Freight", desc: "Fast, priority handling for time-critical shipments.", icon: Plane },
    { title: "Sea Freight", desc: "Cost-effective bulk cargo solutions worldwide.", icon: Ship },
    { title: "Road & Rail", desc: "Flexible, efficient domestic & cross-border delivery.", icon: Truck },
    { title: "Warehousing", desc: "Secure storage, inventory management & distribution.", icon: Warehouse },
    { title: "Customs & Compliance", desc: "Smooth international trade clearance support.", icon: ShieldCheck },
    { title: "E-Commerce Logistics", desc: "End-to-end logistics for online businesses.", icon: ShoppingCart },
  ];

  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h3 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h3>
        <p className="text-blue-100 max-w-2xl mx-auto mb-14">
          We provide a full suite of logistics solutions tailored to meet the
          needs of businesses across industries — fast, reliable, and cost-effective.
        </p>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group p-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-md hover:bg-white hover:text-blue-800 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-blue-100">
                <Icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-sm text-blue-100 group-hover:text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
