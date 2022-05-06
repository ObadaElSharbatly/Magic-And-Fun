import React from "react";
import magicBalloon from "../../../../imgs/IMG_4847.jpg";
import decoration from "../../../../imgs/DSCN2399.jpg";
import scienceShow from "../../../../imgs/IMG-20160329-WA0004.jpg";
import ServiceCard from "./components/ServiceCard";
function Services() {
  //write code here
  const servicesArr = [
    {
      img: magicBalloon,
      title: "Magic balloons  ",
      href: "/",
      id: "001",
    },
    {
      img: decoration,
      title: "Decoration",
      href: "/",
      id: "002",
    },
    {
      img: scienceShow,
      title: "Science show",
      href: "/",
      id: "003",
    },
  ];

  return (
    <section id="services" className="section-container">
      <div className="services-section-container">
        <div className="services-section-title">
          <h2>Services</h2>
          <p>which will turn your next event to an amazing memory</p>
        </div>
        <div className="service-cards-container">
          {servicesArr.map(service => (
            <ServiceCard
              key={service.id}
              src={service.img}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
