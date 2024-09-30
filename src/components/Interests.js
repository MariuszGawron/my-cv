// src/components/Interests.js
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { LanguageContext } from "../context/LanguageContext";
import Loading from "./Loading";

const Interests = () => {
  const { user } = useContext(UserContext);
  const { language } = useContext(LanguageContext);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Zwija, jeśli kliknięto na rozwinięty element
    } else {
      setExpandedIndex(index); // Rozwija wybrany element
    }
  };

  if (!user || !user.interests) {
    return <Loading />;
  }

  return (
    <section className="interests">
      <h2>{language === "en" ? "Interests" : "Zainteresowania"}</h2>
      <ul>
        {user.interests.map((int, index) => (
          <li key={index} className="education-item">
            <div className="course-container">
              <button className="toggle-button" onClick={() => toggleExpand(index)}>
                {expandedIndex === index ? "-" : "+"}
              </button>
              <h3 className="course-title" onClick={() => toggleExpand(index)}>
                {int.name}
              </h3>
            </div>
            <div className={`education-details ${expandedIndex === index ? "expanded" : "collapsed"}`}>
              <p className="description">{int.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;
