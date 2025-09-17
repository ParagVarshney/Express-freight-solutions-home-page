import React from "react";
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    "Speed You Can Trust",
    "Worldwide Coverage with Local Expertise",
    "Outstanding Quality Service Every Time",
    "Cutting-Edge Technology",
    "Best Service for Price Guaranteed",
    "Sustainability Commitment",
  ];

  return (
    <section
      id="why"
      className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white"
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Why Choose Us
        </h3>
        <p className="text-center text-blue-100 max-w-2xl mx-auto mb-14">
          We go above and beyond to deliver logistics services that are fast,
          reliable, and tailored to your business needs.
        </p>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-center shadow-md hover:bg-white hover:text-blue-800 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-white/20">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="font-semibold">{reason}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
