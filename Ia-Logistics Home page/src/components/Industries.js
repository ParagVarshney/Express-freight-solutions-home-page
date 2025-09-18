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
    <section id="industries" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Industry Sectors Coverage
          </h3>
          <p className="text-gray-600 mb-8">
            We cater to a wide range of industries with customized logistics
            solutions that ensure efficiency, reliability, and speed.
          </p>

          <ul className="space-y-5">
            {industries.map(({ title, icon: Icon }) => (
              <li key={title} className="flex items-center gap-4 text-gray-700">
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-100 text-blue-700">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">{title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://media.istockphoto.com/id/1316146871/photo/big-rig-powerful-professional-industrial-semi-truck-for-long-haul-delivery-commercial-cargo.jpg?s=612x612&w=0&k=20&c=_5Xiyv5KQed6P9jfpqJskOsCev4L8UALIMmJio4UCUk=" // replace with your truck image
            alt="Industry coverage"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Industries;
