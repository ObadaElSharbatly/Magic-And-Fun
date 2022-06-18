import React from "react";
import ServiceCard from "./components/ServiceCard";
function Services() {
  //write code here
  const servicesArr = [
    {
      img: "https://res.cloudinary.com/obada/image/upload/v1655546038/magic_and_fun/magic_balloons/010_kdo5ei.jpg",
      title: "Magic balloons  ",
      href: "/magicBalloons",
    },
    {
      img: "https://res.cloudinary.com/obada/image/upload/v1655546037/magic_and_fun/decoration/006_qqufzu.jpg",
      title: "Decoration",
      href: "/decoration",
    },
    {
      img: "https://res.cloudinary.com/obada/image/upload/v1655546034/magic_and_fun/science_show/015_xrag1x.jpg",
      title: "Science show",
      href: "/science-show",
    },
  ];

  return (
    <section id="services" className="section-container">
      <div className="section-content-container">
        <div className="section-header">
          <h2 className="text-yellow-500">Services</h2>
          <h3 className="text-white">
            Which will turn your next event to an amazing memory
          </h3>
        </div>
        <div className="service-cards-container">
          {servicesArr.map((service, index) => (
            <ServiceCard
              key={index}
              src={service.img}
              title={service.title}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
