import React from "react";
import ContactMethod from "./components/ContactMethod";
function Contacts() {
  //write code here
  const contacts = [
    {
      img: "https://res.cloudinary.com/elsharbatly/image/upload/v1655546038/magic_and_fun/logos/whats-logo_oldf1v.png",
      title: "WhatsApp",
      text: "Live chat with us",
      href: "https://wa.me/31687988358",
    },
    {
      img: "https://res.cloudinary.com/elsharbatly/image/upload/v1655546034/magic_and_fun/logos/facebook_logo_yab3as.png",
      title: "Facebook",
      text: "Follow us on Facebook",
      href: "https://www.facebook.com/MagicAndFunGlobal",
    },
    {
      img: "https://res.cloudinary.com/elsharbatly/image/upload/v1655546034/magic_and_fun/logos/email-logo_hksmxp.png",
      title: "Email us",
      text: "Send us an email",
      href: "mailto:obadamoustafa@gmail.com",
    },
    {
      img: "https://res.cloudinary.com/elsharbatly/image/upload/v1655546037/magic_and_fun/logos/youTube-logo_owvcmi.png",
      title: "YouTube",
      text: "Our YouTube channel",
      href: "https://www.youtube.com/channel/UCRdunQiyRHNq4zwk73YQWaw",
    },
    {
      img: "https://res.cloudinary.com/elsharbatly/image/upload/v1655546037/magic_and_fun/logos/github-logo_avmccx.png",
      title: "GitHub",
      text: "Show gitHub profile",
      href: "https://github.com/ObadaMoustafa",
    },
    {
      img: "https://res.cloudinary.com/elsharbatly/image/upload/v1662219002/magic_and_fun/logos/social_linkedin_button_blue_ls828v.png",
      title: "Linkedin",
      text: "Linkedin profile",
      href: "https://www.linkedin.com/in/obada-moustafa/",
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
