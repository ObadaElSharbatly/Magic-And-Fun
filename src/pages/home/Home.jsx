import React from "react";
import About from "./contents/about/About";
import Header from "./contents/header/Header";
import Pricing from "./contents/pricing/Pricing";
import Services from "./contents/services/Services";

function Home() {
  //write code here

  return (
    <div>
      <Header />
      <About />
      <Services />
      <Pricing />
    </div>
  );
}

export default Home;
