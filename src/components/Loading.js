// src/components/Loading.js
import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";

const Loading = () => {
  const { language } = useContext(LanguageContext);
  const [loadingText, setLoadingText] = useState("Loading...");

  useEffect(() => {
    setLoadingText(language === "en" ? "Loading..." : "Ładuję....");
  }, [language]);
  //   const loadingText = language == "en" ? "Loading..." : "Ładuje....";

  return <p className="loading-text">{loadingText}</p>;
};

export default Loading;
