import React from "react";
import logo from "./images/logo1.jpeg";
const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
        <h1>Vaibhav keep</h1>
      </div>
    </>
  );
};

export default Header;
