import React from "react";
import ContactMethod from "./components/ContactMethod";
import whatsLogo from "../../../../imgs/logos/whats-logo.png";
import facebookLogo from "../../../../imgs/logos/facebook_logo.png";
import emailLogo from "../../../../imgs/logos/email-logo.png";
import youTubeLogo from "../../../../imgs/logos/youTube-logo.png";
import gitHubLogo from "../../../../imgs/logos/github-logo.png";
function Contacts() {
  //write code here
  const contacts = [
    {
      img: whatsLogo,
      title: "WhatsApp",
      text: "Live chat with us",
      href: "https://wa.me/31687988358",
    },
    {
      img: facebookLogo,
      title: "Facebook",
      text: "Follow us on Facebook",
      href: "https://www.facebook.com/MagicAndFunGlobal",
    },
    {
      img: emailLogo,
      title: "Email us",
      text: "Send us an email",
      href: "mailto:obadamoustafa@gmail.com",
    },
    {
      img: youTubeLogo,
      title: "YouTube",
      text: "Our YouTube channel",
      href: "https://www.youtube.com/playlist?list=PLoMKCbpTTvvthiSknYuafN-XMhbz-fSlY",
    },
    {
      img: gitHubLogo,
      title: "GitHub",
      text: "Show gitHub profile",
      href: "https://github.com/ObadaElSharbatly",
    },
  ];

  return (
    <div id="contacts" className="section-container">
      <div className="section-content-container">
        <div className="section-header">
          <h2 className="text-yellow-500">Contacts</h2>
          <h3 className="text-white">Don't hesitate to contact us</h3>
        </div>

        <div className="contacts-methods-container">
          {contacts?.map((contact, index) => (
            <ContactMethod key={index} contact={contact} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
