// src/components/About.js
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { LanguageContext } from "../context/LanguageContext";

const About = () => {
  const { user } = useContext(UserContext);
  const { language } = useContext(LanguageContext);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <section className="about">
      <h2>{language === "en" ? "About Me" : "O Mnie"}</h2>
      <p className="description">{user.about}</p>
    </section>
  );
};

export default About;
