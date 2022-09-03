import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu";
function Nav() {
  //write code here
  const navigate = useNavigate();
  const tabs = [
    { title: "Home", href: "/" },
    { title: "About", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Pricing", href: "#pricing" },
    { title: "Contacts", href: "#contacts" },
  ];

  function goToID() {
    navigate("/");
  }
  return (
    <div className="nav-container" id="top">
      <nav>
        <Link to="/" className="h-full py-4">
          <img
            src="https://res.cloudinary.com/elsharbatly/image/upload/v1655546037/magic_and_fun/logos/mf-logo_yiehtm.png"
            alt="Magic andFun logo"
            className="h-full"
          />
        </Link>
        <ul className="nav-tabs-container">
          {tabs.map((tab, index) =>
            tab.title === "Home" ? (
              <Link key={index} to={tab.href} className="nav-tab">
                <li className="">{tab.title}</li>
              </Link>
            ) : (
              <a
                key={index}
                href={tab.href}
                onClick={goToID}
                className="nav-tab"
              >
                <li>{tab.title}</li>
              </a>
            )
          )}
        </ul>
        <SideMenu tabs={tabs} />
      </nav>
    </div>
  );
}

export default Nav;
