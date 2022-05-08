import React from "react";
import Bundle from "./components/Bundle";

function Pricing() {
  //write code here
  const bundles = [
    {
      name: "Small Party",
      description: "For events with 10 guests and less doing all options",
      features: [
        "Balloon Decoration",
        "30 Magic Balloon sculptures",
        "20min Magic show",
      ],
      price: 150,
    },
  ];
  return (
    <section id="pricing" className="section-container">
      <div className="container pricing-section-container">
        <div className="bundles-section-header">
          <h2>Pricing</h2>
          <h3>select your favorite package for next event</h3>
        </div>
        <div className="bundles-container">
          {bundles?.map((bundle, index) => (
            <Bundle key={index} bundle={bundle} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
