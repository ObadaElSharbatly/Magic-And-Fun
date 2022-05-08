import React from "react";
import Bundle from "./components/Bundle";

function Pricing() {
  //write code here
  const bundles = [
    {
      name: "Small Party",
      description: "For indoor events with 10 guests and less",
      features: [
        "Check the place online",
        "Fair Balloon Decoration",
        "30 Magic Balloon sculptures",
        "20min Magic show",
      ],
      price: 150,
    },
    {
      name: "medium Party",
      description: "For indoor events between 11 and 20 guests",
      features: [
        "Check the place online",
        "Two big columns",
        "Two small columns",
        "One arch",
        "Fair wall decoration",
        "40 Magic Balloon sculptures",
        "20min Magic show",
      ],
      price: 250,
    },
    {
      name: "Golden Party",
      description: "For indoor events with more than 20 guests",
      features: [
        "Check the place by visit",
        "Advanced Balloon Decoration",
        "+50 Magic Balloon sculptures",
        "20min Magic show",
      ],
      price: 500,
    },
  ];
  return (
    <section id="pricing" className="section-container">
      <div className="section-content-container">
        <div className="section-header">
          <h2 className="text-red-800">Pricing</h2>
          <h3>Select your favorite package for next event</h3>
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
