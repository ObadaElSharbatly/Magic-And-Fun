import React from "react";

import ImageSlider from "../../components/image_slider/ImageSlider";
import ImageGallery from "../../components/image_gallery/ImageGallery";
import magicBalloonsPhotos from "../../data/magicBalloons.json";

function MagicBalloons() {
  //write code here
  return (
    <>
      <ImageSlider />
      <ImageGallery
        imagesArr={magicBalloonsPhotos}
        GalleryTitle="Magic Balloons"
      />
    </>
  );
}

export default MagicBalloons;
