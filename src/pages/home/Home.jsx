import React from "react";
import About from "./contents/about/About";
import Contacts from "./contents/contacts/Contacts";
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
      <Contacts />
    </div>
  );
}

export default Home;
