// src/components/Footer.js
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { LanguageContext } from "../context/LanguageContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  const { language } = useContext(LanguageContext);

  if (!user || !user.contactEmail) {
    return <p>Loading...</p>;
  }

  return (
    <footer className="footer">
      {/* <p>{language === "en" ? "Contact Me" : "Skontaktuj się ze mną"}:</p>
      <a href={`mailto:${user.contactEmail}`}>{user.contactEmail}</a> */}
    </footer>
  );
};

export default Footer;
