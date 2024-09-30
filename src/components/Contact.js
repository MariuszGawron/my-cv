// src/components/Footer.js
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { LanguageContext } from "../context/LanguageContext";
import Loading from "./Loading";

const Contact = () => {
  const { user } = useContext(UserContext);
  const { language } = useContext(LanguageContext);

  if (!user || !user.contactEmail || !user.contactPhone || !user.contactAddress) {
    return <Loading />;
  }

  return (
    <section className="contact">
      <h2>{language === "en" ? "Contact" : "Kontakt"}</h2>
      <a className="contact-links" href={`tel:${user.contactPhone}`}>
        ☎️ {user.contactPhone}
      </a>{" "}
      <br></br>
      <a className="contact-links" href={`mailto:${user.contactEmail}`}>
        📧 {user.contactEmail}
      </a>
      <br></br>
      <a className="contact-links">🏠 {user.contactAddress}</a>
      <br></br>
      <a className="contact-links linkedin" href={`${user.contactLinkedIn}`} target="_blank" rel="noopener noreferrer">
        ⬅️ Click!
      </a>
      <br></br>
      <a className="contact-links github" href={`${user.contactGitHub}`} target="_blank" rel="noopener noreferrer">
        ⬅️ Click!
      </a>
    </section>
  );
};

export default Contact;
