import React from "react";
import firstPhoto from "../../../imgs/13235754_1112860512108274_1867963001_n.jpg";
import SlideImage from "./SlideImage";
import SlideIndicator from "./SlideIndicator";

function ImageSlider() {
  //write code here
  const images = [
    {
      img: firstPhoto,
      title: "this is amazing",
      label: "amazing photo",
    },
    {
      img: firstPhoto,
      title: "this is amazing",
      label: "amazing photo",
    },
    {
      img: firstPhoto,
      title: "this is amazing",
      label: "amazing photo",
    },
    {
      img: firstPhoto,
      title: "this is amazing",
      label: "amazing photo",
    },
  ];

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide relative "
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        {images?.map((image, index) => (
          <SlideIndicator key={index} index={index} />
        ))}
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        {images?.map((img, index) => (
          <SlideImage
            key={index}
            img={img.img}
            label={img.label}
            title={img.title}
            active={index === 0}
          />
        ))}
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ImageSlider;
