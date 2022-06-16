import React from "react";
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
import p016 from "../../imgs/magic_balloons/016.jpg";

function ImageGallery() {
  //write code here

  return (
    <section className="overflow-hidden text-gray-700">
      <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
          {/* new row */}
          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageGallery;
