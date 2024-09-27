// src/components/Education.js
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { LanguageContext } from "../context/LanguageContext";
import Loading from "./Loading";

const Projects = () => {
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

  if (!user || !user.projects) {
    return <Loading />;
  }

  return (
    <section className="education">
      <h2>{language === "en" ? "Projects" : "Projekty"}</h2>
      <ul>
        {user.projects.map((pro, index) => (
          <li key={index} className="education-item">
            <div className="course-container">
              <button className="toggle-button" onClick={() => toggleExpand(index)}>
                {expandedIndex === index ? "-" : "+"}
              </button>
              <h3 className="course-title" onClick={() => toggleExpand(index)}>
                {pro.name}
                <a
                  className="project-github-link"
                  href={pro.github ? pro.github : undefined}
                  target={pro.github ? "_blank" : undefined}
                  rel={pro.github ? "noopener noreferrer" : undefined}
                >
                  <img
                    src="/img/github-ico.png" // Miniatura obrazu
                    alt="Github logo"
                    className="github-logo"
                  />
                </a>
              </h3>
              {pro.thumbnail && (
                <a className="certificate-preview-link" href={pro.link ? pro.link : "photo.html"} target="_blank" rel="noopener noreferrer">
                  <img
                    src={pro.thumbnail} // Miniatura obrazu
                    alt="Certificate preview"
                    className="certificate-preview"
                  />
                </a>
              )}
              <span className="years"> | {pro.technology}</span>
            </div>
            <div className={`education-details ${expandedIndex === index ? "expanded" : "collapsed"}`}>
              <h4>{pro.school}</h4>
              <p className="description">{pro.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
