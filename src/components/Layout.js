import React from "react";
import "../styles/LayoutStyles.sass";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <footer>
        Checking version 0.1.0 - &copy;{new Date().getFullYear()}{" "}
      </footer>
    </React.Fragment>
  );
};

export default Layout;
