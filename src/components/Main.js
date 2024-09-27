// src/components/Main.js
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Header from "./Header";
import About from "./About";
import Experience from "./Experience";
import Footer from "./Footer";
import Loading from "./Loading";
import Education from "./Education";
import Projects from "./Projects";
import Interests from "./Interests";

const Main = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Loading />;
  }

  return (
    <div className="main">
      <Header />
      <About />
      <Projects />
      <Education />
      <Experience />
      <Interests />
      <Footer />
    </div>
  );
};

export default Main;
