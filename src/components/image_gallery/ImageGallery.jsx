// this image gallery is from tailwind-elements and I refactored it to be more flexable with react
// https://tailwind-elements.com/docs/standard/components/gallery/
import React from "react";

import OrganizeImages from "./OrganizeImages";

function ImageGallery({ imagesArr, GalleryTitle }) {
  //write code here

  return (
    <section className="section-container bg-black">
      <div className="section-content-container">
        <div className="section-header">
          <h2 className="text-white text-center">{GalleryTitle}</h2>
        </div>
        <div className="flex flex-wrap mx-auto">
          <OrganizeImages imagesArr={imagesArr} />
        </div>
      </div>
    </section>
  );
}

export default ImageGallery;
