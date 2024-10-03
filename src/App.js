// src/App.js
import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import { UserProvider } from "./context/UserContext";
import Main from "./components/Main";
import Aside from "./components/Aside";
import "./styles/theme.css";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <UserProvider>
          <div className="container">
            <Main />
            <Aside />
          </div>
        </UserProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
