// src/components/LanguageSwitcher.js
import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button className="language-button" onClick={toggleLanguage}>
      {language === "en" ? "PL" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
