// src/components/Footer.js
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Loading from "./Loading";

const Footer = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Loading />;
  }

  return (
    <footer className="footer">
      <h3>2024 - Mariusz Gawron</h3>
    </footer>
  );
};

export default Footer;
