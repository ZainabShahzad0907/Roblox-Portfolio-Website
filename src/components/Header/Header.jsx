import React from "react";
import "./Header.css";
function Header({ cartCount, toggleDarkMode, darkMode }) {
  return (
    <div className="header">
        <h1 className="Header-title">Roblox Developer Portfolio </h1>
        <h2 className ="Header-subtitle">Bringing Ideas to Life</h2>
    </div>
  );
}

export default Header;

