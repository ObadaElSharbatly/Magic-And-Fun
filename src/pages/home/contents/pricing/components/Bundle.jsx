import React from "react";
import BundleFeature from "./PackageFeature";

function Bundle({ bundle }) {
  //write code here
  const { name, description, features, price } = bundle;
  return (
    <div className="bundle-container">
      <div>
        <h3 className="bundle-name">{name}</h3>
        <p className="bundle-description">{description}</p>
        <ul className="bundle-features">
          {features?.length > 0 &&
            features.map((feature, index) => (
              <BundleFeature key={index} text={feature} />
            ))}
        </ul>
      </div>
      <div className="purchase-btn">
        <span>{price}</span>€
      </div>
    </div>
  );
}

export default Bundle;
