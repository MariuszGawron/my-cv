// src/components/Skills.js
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { LanguageContext } from "../context/LanguageContext";
import Loading from "./Loading";

const SkillLevel = ({ level }) => {
  const dots = Array.from({ length: 6 }, (_, index) => (
    <span key={index} className={`dot ${index < level ? "filled" : ""}`}>
      ●
    </span>
  ));

  return <span className="dots">{dots}</span>;
};

const Skills = () => {
  const { user } = useContext(UserContext);
  const { language } = useContext(LanguageContext);

  if (!user || !user.hardSkills || !user.softSkills || !user.softwareSkills) {
    return <Loading />;
  }

  return (
    <section className="skills">
      <h2>{language === "en" ? "Technologies" : "Technologie"}</h2>
      <ul className="lists">
        {user.hardSkills.map((skill, index) => (
          <li key={index}>
            {skill.name} <SkillLevel level={skill.level} />
          </li>
        ))}
      </ul>
      <h2>{language === "en" ? "Soft skills" : "Umiejętności miękkie"}</h2>
      <ul>
        {user.softSkills.map((skill, index) => (
          <li key={index}>{skill.name}</li>
        ))}
      </ul>
      <h2>{language === "en" ? "Software Proficiency" : "Znajomość programów"}</h2>
      <ul className="lists">
        {user.softwareSkills.map((skill, index) => (
          <li key={index}>
            {skill.name} <SkillLevel level={skill.level} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
