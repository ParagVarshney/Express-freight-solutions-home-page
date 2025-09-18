import React from "react";
import { Globe, Target, HeartHandshake, Leaf, ShieldCheck, Zap } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="bg-gray-50 py-16 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          About Us
        </h2>
        <p className="text-lg text-gray-600">
          Fast, reliable, and efficient freight solutions tailored to your business.
        </p>
      </div>

      {/* Who We Are */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <img
          src="https://media.istockphoto.com/id/530203074/photo/group-portrait-of-staff-at-distribution-warehouse-low-angle.jpg?s=612x612&w=0&k=20&c=d4T-Mlp77zMfqNLgh57V7jB-nf_aKT6BI00RNB25OHI="
          alt="Logistics team"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h3>
          <p className="text-gray-600 leading-relaxed">
            Express Freight Solutions is a premier provider of fast, reliable, and
            efficient freight services, delivering across Australia and worldwide.
            With 20+ years of expertise, our team ensures your shipments reach their
            destination on time, every time. We adapt to each client’s challenges,
            delivering customized logistics solutions that drive success.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to simplify global logistics through speed, transparency,
            and innovation. With a robust network of international partners and local
            expertise, we provide cost-effective, seamless freight solutions that
            empower your business to thrive.
          </p>
        </div>
        <img
          src="https://media.licdn.com/dms/image/v2/C4D1BAQF_p3BYMEHH8Q/company-background_10000/company-background_10000/0/1652420723413/glgofficial_cover?e=2147483647&v=beta&t=jUkOCZEogoBGUEKSeMhiDSfcFkdRpfovQ8cthH4cTFQ"
          alt="Global logistics"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Values */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Our Values
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: "Integrity", desc: "We operate with honesty and transparency in all our dealings." },
            { icon: Zap, title: "Innovation", desc: "We embrace technology to streamline processes and enhance service." },
            { icon: Globe, title: "Reliability", desc: "We deliver on our promises, ensuring your cargo arrives on time." },
            { icon: Leaf, title: "Sustainability", desc: "We prioritize eco-friendly practices to reduce environmental impact." },
            { icon: HeartHandshake, title: "Customer Focus", desc: "Your satisfaction is at the heart of everything we do." },
          ].map((val, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
            >
              <val.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">{val.title}</h4>
              <p className="text-gray-600 text-sm">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Global Presence */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3r86vCzWQ1uqDWYBG31QozeK3pQJCYo17Gw&s"
          alt="Global presence"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Global Presence</h3>
          <p className="text-gray-600 leading-relaxed">
            With offices and trusted partners in over 50 countries, Express Freight
            Solutions provides seamless door-to-door service worldwide. From Sydney
            to Singapore, New York to New Delhi, our global network ensures your
            shipments are handled with care and precision. Our local expertise in
            Australia allows us to navigate regional regulations efficiently,
            delivering faster and smarter solutions tailored to your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

