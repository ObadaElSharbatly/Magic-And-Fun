import React from "react";

function ServiceCard({ src, title, href }) {
  //write code here

  return (
    <div className="group service-card">
      <div className="service-img">
        <img src={src} alt={title} title={title} />
      </div>
      <h3 className="service-title">{title}</h3>
    </div>
  );
}

export default ServiceCard;
