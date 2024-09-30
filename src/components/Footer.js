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
      <span>
        Wyrażam zgodę na przetwarzanie moich danych osobowych w celach rekrutacji, zgodnie z Ustawą z dn. 29 sierpnia 1997 r. o ochronie danych osobowych (Dz.
        U. z 2002 r. Nr 101, poz. 926 z późniejszymi zmianami).
      </span>
      <h3>2024 - Mariusz Gawron</h3>
    </footer>
  );
};

export default Footer;
