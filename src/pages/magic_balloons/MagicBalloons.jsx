import React from "react";

import ImageSlider from "../../components/image_slider/ImageSlider";
import ImageGallery from "../../components/image_gallery/ImageGallery";
import p001 from "../../imgs/magic_balloons/001.jpg";
import p002 from "../../imgs/magic_balloons/002.jpg";
import p003 from "../../imgs/magic_balloons/003.jpg";
import p004 from "../../imgs/magic_balloons/004.jpg";
import p005 from "../../imgs/magic_balloons/005.jpg";
import p006 from "../../imgs/magic_balloons/006.jpg";
import p007 from "../../imgs/magic_balloons/007.jpg";
import p008 from "../../imgs/magic_balloons/008.jpg";
import p009 from "../../imgs/magic_balloons/009.jpg";
import p010 from "../../imgs/magic_balloons/010.jpg";
import p011 from "../../imgs/magic_balloons/011.jpg";
import p012 from "../../imgs/magic_balloons/012.jpg";
import p013 from "../../imgs/magic_balloons/013.jpg";
import p014 from "../../imgs/magic_balloons/014.jpg";
import p015 from "../../imgs/magic_balloons/015.jpg";

function MagicBalloons() {
  //write code here

  const imagesForGallery = [
    [p001, p002, p003],
    [p004, p005, p006],
    [p007, p008, p009],
    [p010, p011, p012],
    [p013, p014, p015],
  ];
  return (
    <>
      <ImageSlider />
      <ImageGallery
        imagesArr={imagesForGallery}
        GalleryTitle="Magic Balloons"
      />
    </>
  );
}

export default MagicBalloons;
