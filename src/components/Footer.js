// src/components/Footer.js
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Loading />;
  }

  return (
    <footer className="footer">
      {/* <p>{language === "en" ? "Contact Me" : "Skontaktuj się ze mną"}:</p>
      <a href={`mailto:${user.contactEmail}`}>{user.contactEmail}</a> */}
    </footer>
  );
};

export default Footer;
