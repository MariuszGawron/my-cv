// src/components/Interests.js
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { LanguageContext } from "../context/LanguageContext";
import Loading from "./Loading";

const Interests = () => {
  const { user } = useContext(UserContext);
  const { language } = useContext(LanguageContext);

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
              <button className="button-nonclick">{"+"}</button>
              <h3>{int.name}</h3>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;
