// src/components/Footer.js
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { LanguageContext } from "../context/LanguageContext";
import Loading from "./Loading";

const Contact = () => {
  const { user } = useContext(UserContext);
  const { language } = useContext(LanguageContext);

  const [showContactInfo, setShowContactInfo] = useState(false);

  if (!user || !user.contactEmail || !user.contactPhone || !user.contactAddress) {
    return <Loading />;
  }

  return (
    <section className="contact">
      <h2>{language === "en" ? "Contact" : "Kontakt"}</h2>

      {!showContactInfo && (
        <>
          <button className="button" onClick={() => setShowContactInfo(true)}>
            {language === "en" ? "Show contact details" : "Pokaż dane kontaktowe"}
          </button>

          <br />
          <a className="contact-links" href={`tel:`}>
            ☎️
          </a>
          <br />
          <a className="contact-links" href={`mailto:`}>
            📧
          </a>
          <br />
        </>
      )}

      {showContactInfo && (
        <>
          <a className="contact-links" href={`tel:${user.contactPhone}`}>
            ☎️ {user.contactPhone}
          </a>
          <br />
          <a className="contact-links" href={`mailto:${user.contactEmail}`}>
            📧 {user.contactEmail}
          </a>
          <br />
        </>
      )}

      <a className="contact-links" href="https://maps.app.goo.gl/iJrEvzSiUkuTgQd96" target="_blank" rel="noopener noreferrer">
        🏠 {user.contactAddress}
      </a>
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
