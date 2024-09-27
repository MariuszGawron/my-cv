// src/components/Header.js
import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import Loading from "./Loading";

const Header = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Loading />;
  }

  return (
    <header className="header">
      <h1>{user.name}</h1>
      <img src="/img/qrcode-small.png" className="qrqode-small" alt="QR qode" />
      <div className="switchers">
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
