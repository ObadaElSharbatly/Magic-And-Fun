import React from "react";
import firstPhoto from "../../imgs/13235754_1112860512108274_1867963001_n.jpg";
import ImageSlider from "./components/ImageSlider";
function MagicBalloons() {
  //write code here
  const images = [
    {
      img: firstPhoto,
      title: "this is the first photo",
      label: "first photo label",
    },
  ];
  return (
    <>
      <ImageSlider />
    </>
  );
}

export default MagicBalloons;
