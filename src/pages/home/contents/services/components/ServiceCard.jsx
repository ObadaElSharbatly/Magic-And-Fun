import React from "react";
import { Link } from "react-router-dom";

function ServiceCard({ src, title, href }) {
  //write code here

  return (
    <div className="group service-card">
      <Link to={href}>
        <div className="service-img">
          <img src={src} alt={title} title={title} />
        </div>
        <h3 className="service-title">{title}</h3>
      </Link>
    </div>
  );
}

export default ServiceCard;
