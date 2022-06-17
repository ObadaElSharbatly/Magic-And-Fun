import React from "react";
import ImageGallery from "../../components/image_gallery/ImageGallery";
import ImageSlider from "../../components/image_slider/ImageSlider";

import p001 from "../../imgs/decoration/001.jpg";
import p002 from "../../imgs/decoration/002.jpg";
import p003 from "../../imgs/decoration/003.jpg";
import p004 from "../../imgs/decoration/004.jpg";
import p005 from "../../imgs/decoration/005.jpg";
import p006 from "../../imgs/decoration/006.jpg";

function Decoration() {
  //write code here
  const imagesForGallery = [
    [p001, p002, p003],
    [p004, p005, p006],
  ];
  return (
    <>
      <ImageSlider />
      <ImageGallery
        imagesArr={imagesForGallery}
        GalleryTitle="Balloons decoration"
      />
    </>
  );
}

export default Decoration;
