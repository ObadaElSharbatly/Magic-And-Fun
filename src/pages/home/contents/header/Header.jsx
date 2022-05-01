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
    <header className="home-header">
      <div>
        <p>Hello</p>
      </div>
    </header>
  );
}

export default Header;
