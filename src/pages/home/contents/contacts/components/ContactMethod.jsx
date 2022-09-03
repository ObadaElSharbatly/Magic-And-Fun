import React from "react";

function ContactMethod({ contact }) {
  //write code here
  const { img, title, text, href } = contact;

  return (
    <a
      href={href}
      className="contact-method"
      title={title}
      target="_blank"
      rel="noreferrer"
    >
      <img src={img} alt={title} width="50" height="50" />
      <p className="contact-method-text">{text}</p>
    </a>
  );
}

export default ContactMethod;
