import React from "react";
import Logo from "../assets/images/logo_transparent.png";
import { Link } from "react-router-dom";
import { ReactComponent as HomeImg } from "../assets/images/002-home.svg";

const Header = () => {
  return (
    <header>
      <div className="content">
        <img src={Logo} className="logo" alt="logo" />
        <nav>
          <ul>
            <li>
              <Link to="/">
                <HomeImg />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
