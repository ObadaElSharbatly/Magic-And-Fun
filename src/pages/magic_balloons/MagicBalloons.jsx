import React from "react";
import firstPhoto from "../../imgs/magic_balloons/001.jpg";
import secondPhoto from "../../imgs/magic_balloons/002.jpg";
import thirdPhoto from "../../imgs/magic_balloons/003.jpg";
import fourthPhoto from "../../imgs/magic_balloons/004.jpg";
import ImageSlider from "../../components/image_slider/ImageSlider";
import ImageGallery from "../../components/image_gallery/ImageGallery";
function MagicBalloons() {
  //write code here
  const images = [
    {
      img: firstPhoto,
      title: "Quality and confidence",
      label: "",
    },
    {
      img: secondPhoto,
      label: "Unforgettable memory ",
      title: "Let all children happy when they select their favorite sculpture",
    },
    {
      img: thirdPhoto,
      label: "Nice moments",
      title: "Take beautiful pictures for your kids",
    },
    {
      img: fourthPhoto,
      label: "Not only for children",
      title: "Adults also enjoy the magic balloon and may ask for themselves",
    },
  ];
  return (
    <>
      <ImageSlider imagesArr={images} />
      <div className="section-content-container border">
        <h1>Magic Balloons Gallery</h1>
        <ImageGallery />
      </div>
    </>
  );
}

export default MagicBalloons;
