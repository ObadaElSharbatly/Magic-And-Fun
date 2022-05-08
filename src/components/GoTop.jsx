import React from "react";

function GoTop() {
  //write code here

  return (
    <a
      href="#top"
      className="
      w-10 h-10 rounded bg-black
      flex justify-center items-center
      fixed bottom-3 right-3 cursor-pointer
      hover:shadow-service
      focus:shadow-none
      z-10"
    >
      <i className="fa-solid fa-arrows-up-to-line text-white fa-lg"></i>
    </a>
  );
}

export default GoTop;
