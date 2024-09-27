// src/components/Aside.js
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { LanguageContext } from "../context/LanguageContext";
import Skills from "./Skills";
import Contact from "./Contact";
import profilePic from "../img/photo-head.jpg";
import Loading from "./Loading";

const Aside = () => {
  const { user } = useContext(UserContext);
  const { language } = useContext(LanguageContext);

  if (!user) {
    return <Loading />;
  }

  return (
    <section className="aside">
      <img src={profilePic} className="photo-of-me" alt="Me" />

      <Contact />
      <Skills />
    </section>
  );
};

export default Aside;
