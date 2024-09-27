// src/components/Education.js
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { LanguageContext } from "../context/LanguageContext";
import Loading from "./Loading";

const Education = () => {
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

  if (!user || !user.education) {
    return <Loading />;
  }

  return (
    <section className="education">
      <h2>{language === "en" ? "Education" : "Edukacja"}</h2>
      <ul>
        {user.education.map((edu, index) => (
          <li key={index} className="education-item">
            <div className="course-container">
              <button className="toggle-button" onClick={() => toggleExpand(index)}>
                {expandedIndex === index ? "-" : "+"}
              </button>
              <h3 className="course-title" onClick={() => toggleExpand(index)}>
                {edu.course} <span className="years"> | {edu.years}</span>
              </h3>
              {edu.certificate && (
                <a className="certificate-preview-link" href={edu.certificate} target="_blank" rel="noopener noreferrer">
                  <img
                    src={edu.certificateThumbnail} // Miniatura obrazu
                    alt="Certificate preview"
                    className="certificate-preview"
                  />
                </a>
              )}
            </div>
            <div className={`education-details ${expandedIndex === index ? "expanded" : "collapsed"}`}>
              <h4>{edu.school}</h4>
              <p className="description">{edu.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
