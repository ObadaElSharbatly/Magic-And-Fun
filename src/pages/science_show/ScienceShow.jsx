import React from "react";

import ImageGallery from "../../components/image_gallery/ImageGallery";
import ImageSlider from "../../components/image_slider/ImageSlider";

import scienceShowPhotos from "../../data/scienceShow.json";

function ScienceShow() {
  //write code here

  return (
    <>
      <ImageSlider />
      <ImageGallery imagesArr={scienceShowPhotos} GalleryTitle="Science show" />
    </>
  );
}

export default ScienceShow;
