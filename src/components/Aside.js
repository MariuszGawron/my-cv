// src/components/Aside.js
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Skills from "./Skills";
import Contact from "./Contact";
import Loading from "./Loading";

const Aside = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Loading />;
  }

  return (
    <section className="aside">
      <img src="/img/photo-head2.jpg" className="photo-of-me" alt="Me" />

      <Contact />
      <Skills />

      <img src="/img/qrcode.png" className="qrqode" alt="QR qode" />
    </section>
  );
};

export default Aside;
