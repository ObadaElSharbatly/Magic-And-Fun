import React from "react";
import Package from "./components/Package";

function Pricing() {
  //write code here

  return (
    <section id="pricing" className="section-container">
      <div className="container">
        <h2>Pricing</h2>
        <h3>select your favorite package for next event</h3>
        <Package />
      </div>
    </section>
  );
}

export default Pricing;
