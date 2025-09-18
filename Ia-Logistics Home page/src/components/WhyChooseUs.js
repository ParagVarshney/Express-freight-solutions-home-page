import React from "react";
import { ThumbsUp, Truck, Clock, Shield, Users, Globe } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Quality Service",
      icon: ThumbsUp,
      desc: "We prioritize service excellence, ensuring our clients get the best every time.",
      img: "https://cdn-icons-png.flaticon.com/512/10057/10057964.png", // replace with your image
      link: "Read More",
    },
    {
      title: "On-Time Delivery",
      icon: Truck,
      desc: "Timely deliveries are our promise, making us a trusted logistics partner.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4lqsuGlLhvkw0efO-cVv4DvJcOir-wo6vgg&s",
      link: "Read More",
    },
    {
      title: "24/7 Support",
      icon: Clock,
      desc: "Round-the-clock support to ensure smooth operations without interruptions.",
      img: "https://cardiac.zoll.com/hs-fs/hubfs/Icon_247%20Support_2%20COLOR.png?width=900&height=825&name=Icon_247%20Support_2%20COLOR.png",
      link: "Contact Us",
    },
    {
      title: "Secure Handling",
      icon: Shield,
      desc: "Safety is our top priority. We ensure secure handling of goods at all stages.",
      img: "https://safefly.aero/wp-content/uploads/al_opt_content/IMAGE/safefly.aero/wp-content/uploads/2022/11/loading-platform-air-freight-aircraft-food-flight-check-services-equipment-ready-before-boarding-airplane_29285-2034-1200x675.webp.bv_resized_mobile.webp.bv.webp?bv_host=safefly.aero",
      link: "Learn More",
    },
    {
      title: "Expert Team",
      icon: Users,
      desc: "Our experienced team ensures smooth operations across all services.",
      img: "https://static.thenounproject.com/png/3611425-200.png",
      link: "Meet Our Team",
    },
    {
      title: "Global Reach",
      icon: Globe,
      desc: "We provide logistics solutions across multiple countries with reliable networks.",
      img: "https://img.freepik.com/free-vector/character-illustration-people-with-global-network-concept_53876-43079.jpg?semt=ais_incoming&w=740&q=80",
      link: "Explore Network",
    },
  ];

  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {reasons.map(({ title, desc, img, link }) => (
          <div key={title} className="text-center md:text-left">
            {/* Title with underline */}
            <h3 className="text-2xl font-bold text-gray-800 mb-4 relative inline-block">
              {title}
              <span className="absolute left-0 -bottom-1 w-10 h-1 bg-blue-600"></span>
            </h3>

            {/* Image */}
            <div className="mb-4 flex justify-center md:justify-start">
              <img
                src={img}
                alt={title}
                className="w-40 h-40 object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-4">{desc}</p>

            {/* Link */}
            <a
              href="#"
              className="text-blue-700 font-semibold hover:underline"
            >
              {link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
