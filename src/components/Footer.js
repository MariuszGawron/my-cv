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
        Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018
        roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27
        kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz
        uchylenia dyrektywy 95/46/WE (RODO)).
      </span>
      <h3>2024 - Mariusz Gawron</h3>
    </footer>
  );
};

export default Footer;
