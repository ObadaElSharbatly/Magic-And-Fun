import React, { useEffect } from "react";
import ImageGallery from "../../components/image_gallery/ImageGallery";
import ImageSlider from "../../components/image_slider/ImageSlider";

import decorationPhotos from "../../data/decoration.json";

function Decoration() {
  //write code here
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <ImageSlider />
      <ImageGallery
        imagesArr={decorationPhotos}
        GalleryTitle="Balloons decoration"
      />
    </>
  );
}

export default Decoration;
