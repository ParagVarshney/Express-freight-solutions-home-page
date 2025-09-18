import React from "react";

const Services = () => {
  const services = [
    {
      title: "Air Freight",
      desc: "Fast, priority handling for time-critical shipments.",
      img: "http://freightsms.com/Content/img/pics/img03.jpg", 
    },
    {
      title: "Sea Freight",
      desc: "Cost-effective bulk cargo solutions worldwide.",
      img: "http://freightsms.com/Content/img/pics/img02.jpg", 
    },
    {
      title: "Road & Rail",
      desc: "Flexible, efficient domestic & cross-border delivery.",
      img: "https://www.trukky.com/blog/wp-content/uploads/2017/08/Road-Vs.-Rail-Transport.jpg", 
    },
    {
      title: "Warehousing",
      desc: "Secure storage, inventory management & distribution.",
      img: "https://www.freshbooks.com/wp-content/uploads/2022/01/what-is-a-warehouse.jpg", 
    },
    {
      title: "Customs & Compliance",
      desc: "Smooth international trade clearance support.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJyIUX9bqkc8mLk7je7FQaK8OlkUtUcxb4cA&s",
    },
    {
      title: "E-Commerce Logistics",
      desc: "End-to-end logistics for online businesses.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_gOG7j6qByPm6ijjIGtKVPBKElFnoosLRHQ&s",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Our Services
        </h3>
        <p className="text-gray-500 max-w-2xl mx-auto mb-14">
          We provide a full suite of logistics solutions tailored to meet the
          needs of businesses across industries — fast, reliable, and cost-effective.
        </p>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map(({ title, desc, img }) => (
            <div
              key={title}
              className="rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={img}
                alt={title}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
              {/* Text Section */}
              <div className="p-6 text-left">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {title}
                </h4>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
