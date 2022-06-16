import React from "react";

function SlideImage({ img, label, title, active }) {
  //write code here
  const activeClass = active ? "active" : "";
  return (
    <div className={`carousel-item ${activeClass} relative float-left w-full`}>
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{ backgroundPosition: "50%" }}
      >
        <img
          src={img}
          className="block w-full object-cover image-h"
          alt={label}
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black opacity-30"></div>
      </div>
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">{label}</h5>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default SlideImage;
