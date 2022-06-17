import React from "react";

import ImageGallery from "../../components/image_gallery/ImageGallery";
import ImageSlider from "../../components/image_slider/ImageSlider";

import p001 from "../../imgs/science_show/001.jpg";
import p002 from "../../imgs/science_show/002.jpg";
import p003 from "../../imgs/science_show/003.jpg";
import p004 from "../../imgs/science_show/004.jpg";
import p005 from "../../imgs/science_show/005.jpg";
import p006 from "../../imgs/science_show/006.jpg";
import p007 from "../../imgs/science_show/007.jpg";
import p008 from "../../imgs/science_show/008.jpg";
import p009 from "../../imgs/science_show/009.jpg";
import p010 from "../../imgs/science_show/010.jpg";
import p011 from "../../imgs/science_show/011.jpg";
import p012 from "../../imgs/science_show/012.jpg";
import p013 from "../../imgs/science_show/013.jpg";
import p014 from "../../imgs/science_show/014.jpg";
import p015 from "../../imgs/science_show/015.jpg";

function ScienceShow() {
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
      <ImageGallery imagesArr={imagesForGallery} GalleryTitle="Science show" />
    </>
  );
}

export default ScienceShow;
