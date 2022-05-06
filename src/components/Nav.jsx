import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/mf-logo.png";
import SideMenu from "./SideMenu";
function Nav() {
  //write code here
  const tabs = [
    { title: "Home", href: "#top" },
    { title: "About", href: "#about" },
    { title: "Services", href: "#services" },
    { title: "Pricing", href: "#pricing" },
    { title: "Contacts", href: "#contacts" },
  ];
  return (
    <div className="nav-container" id="top">
      <nav className="h-20 container flex justify-between items-center">
        <Link to="/" className="h-full py-4">
          <img src={logo} alt="Magic&Fun logo" className="h-full" />
        </Link>
        <ul className="md:w-3/5 md:h-full md:flex md:items-center md:justify-center hidden">
          {tabs.map((tab, index) => (
            <a
              key={index}
              href={tab.href}
              className="flex-auto h-full text-center pt-6 text-yellow-400 text-lg font-bold hover:bg-black transition duration-500 rounded-lg"
            >
              <li className="">{tab.title}</li>
            </a>
          ))}
        </ul>
        <SideMenu tabs={tabs} />
      </nav>
    </div>
  );
}

export default Nav;
