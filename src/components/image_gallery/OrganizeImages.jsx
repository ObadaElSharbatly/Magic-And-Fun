import React from "react";

function OrganizeImages({ imagesArr }) {
  // this component expects and array of arrays every array has three pictures
  // e.g. [[p1,p2,p3],[p4,p5,p6]]

  return (
    <>
      {imagesArr?.map(([p1, p2, p3], index) =>
        index % 2 === 0 ? (
          <div className="flex flex-wrap w-full lg:w-1/2" key={index}>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={p1}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={p2}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={p3}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap w-full lg:w-1/2" key={index}>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={p1}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={p2}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={p3}
              />
            </div>
          </div>
        )
      )}
    </>
  );
}

export default OrganizeImages;
