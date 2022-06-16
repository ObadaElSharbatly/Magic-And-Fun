import React from "react";

function SlideIndicator({ index }) {
  //write code here

  return (
    <>
      {index === 0 ? (
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
      ) : (
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to={index}
          aria-label={`Slide ${index + 1}`}
        ></button>
      )}
    </>
  );
}

export default SlideIndicator;
