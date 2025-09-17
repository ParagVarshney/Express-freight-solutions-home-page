import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white"
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h3 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h3>

        {/* Contact Details */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-sm">
            <MapPin className="w-8 h-8 mx-auto mb-3" />
            <p className="text-blue-100 text-sm">
               Dubai, UAE
            </p>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-sm">
            <Phone className="w-8 h-8 mx-auto mb-3" />
            <p className="text-blue-100 text-sm">+971 56 163 5092</p>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-sm">
            <Mail className="w-8 h-8 mx-auto mb-3" />
            <p className="text-blue-100 text-sm"> info@expressfreightsolutions.com.au</p>
          </div>
        </div>

        {/* Call-to-Action */}
        <a
          href="mailto:info@ialogistics.com"
          className="inline-block bg-white text-blue-800 font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-blue-100 hover:shadow-xl transition duration-300"
        >
          Get Started Today
        </a>
      </div>
    </section>
  );
};

export default Contact;
