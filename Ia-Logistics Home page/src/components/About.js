import React from "react";
import { ShieldCheck, Lightbulb, Users, CheckCircle, Leaf } from "lucide-react";

const About = () => {
  const values = [
    { title: "Integrity", icon: ShieldCheck },
    { title: "Innovation", icon: Lightbulb },
    { title: "Customer Focus", icon: Users },
    { title: "Reliability", icon: CheckCircle },
    { title: "Sustainability", icon: Leaf },
  ];

  return (
    <section
      id="about"
      className="relative py-20 text-white"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ60Sx9vVqayBDlngD8bSudYDXpvLM50sdX9w&s')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h3 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          About Us
        </h3>

        {/* Paragraph */}
        <p className="text-blue-100 max-w-3xl mx-auto leading-relaxed mb-14 drop-shadow-md">
          Founded in 2015, IA Global Logistics has expanded across Dubai and New Zealand, providing world-class logistics solutions. Our mission is to deliver services with professionalism, excellence, and timeliness, supported by strong global networks and deep local expertise.
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {values.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-sm hover:bg-white hover:text-blue-800 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-blue-100">
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

export default About;

