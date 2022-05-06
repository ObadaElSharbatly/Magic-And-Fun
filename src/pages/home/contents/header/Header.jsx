import React, { useEffect, useState } from "react";
function Header() {
  //write code here
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  function getScreenSize() {
    setScreenWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", getScreenSize);
    return () => window.removeEventListener("resize", getScreenSize);
  }, [screenWidth]);

  return (
    <header className="home-header ">
      <div>
        <div className="header-label">
          <p className="header-label-company-name">Magic & Fun</p>
          <p className="header-label-slogan">Bring happiness, bring us</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
