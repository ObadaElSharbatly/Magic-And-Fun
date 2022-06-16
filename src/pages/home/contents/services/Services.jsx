import React from "react";
import magicBalloon from "../../../../imgs/magic_balloons/010.jpg";
import decoration from "../../../../imgs/decoration/002.jpg";
import scienceShow from "../../../../imgs/science_show/001.jpg";
import ServiceCard from "./components/ServiceCard";
function Services() {
  //write code here
  const servicesArr = [
    {
      img: magicBalloon,
      title: "Magic balloons  ",
      href: "/magicBalloons",
    },
    {
      img: decoration,
      title: "Decoration",
      href: "/",
    },
    {
      img: scienceShow,
      title: "Science show",
      href: "/",
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
