import React from "react";
import Logo from "../assets/images/logo_transparent.png";

const Header = () => {
  return (
    <header>
      <div className="content">
        <img src={Logo} className="logo" alt="logo" />
      </div>
    </header>
  );
};

export default Header;
