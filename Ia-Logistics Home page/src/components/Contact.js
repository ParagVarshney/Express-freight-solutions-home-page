import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 text-white"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1675842663249-a8b70103dbaa?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww')", // Replace with your logistics/office image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/95 via-purple-600/80 to-pink-600/70"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h3 className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-lg">
          Contact Us
        </h3>

        {/* Contact Details */}
        <div className="grid sm:grid-cols-3 gap-8 mb-14">
          <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:shadow-blue-400/50 hover:-translate-y-2 transition duration-300">
            <MapPin className="w-10 h-10 mx-auto mb-3 text-blue-300" />
            <p className="text-blue-100 text-sm font-medium">Dubai, UAE</p>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:shadow-blue-400/50 hover:-translate-y-2 transition duration-300">
            <Phone className="w-10 h-10 mx-auto mb-3 text-green-300" />
            <p className="text-blue-100 text-sm font-medium">+971 56 163 5092</p>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md hover:shadow-blue-400/50 hover:-translate-y-2 transition duration-300">
            <Mail className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <p className="text-blue-100 text-sm font-medium">
              info@expressfreightsolutions.com.au
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <a
          href="mailto:info@ialogistics.com"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition duration-300"
        >
          Get Started Today
        </a>
      </div>
    </section>
  );
};

export default Contact;
