// src/components/Experience.js
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { LanguageContext } from "../context/LanguageContext";
import Loading from "./Loading";

const Experience = () => {
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

  if (!user || !user.experience) {
    return <Loading />;
  }

  return (
    <section className="experience">
      <h2>{language === "en" ? "Experience" : "Doświadczenie"}</h2>
      <ul>
        {user.experience.map((job, index) => (
          <li key={index} className="education-item">
            <div className="course-container">
              <button className="toggle-button" onClick={() => toggleExpand(index)}>
                {expandedIndex === index ? "-" : "+"}
              </button>
              <h3 className="course-title" onClick={() => toggleExpand(index)}>
                {job.title} <span className="years"> | {job.years}</span>
              </h3>
              {job.certificate && (
                <a className="certificate-preview-link" href={job.certificate} target="_blank" rel="noopener noreferrer">
                  <img
                    src={job.certificateThumbnail} // Miniatura obrazu
                    alt="Certificate preview"
                    className="certificate-preview"
                  />
                </a>
              )}
            </div>
            <div className={`education-details ${expandedIndex === index ? "expanded" : "collapsed"}`}>
              <h4>{job.company}</h4>
              <p className="description">{job.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
