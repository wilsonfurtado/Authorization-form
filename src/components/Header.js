import React from "react";

import "./css/Header.css";

const Header = ({ title }) => {
  return (
    <>
      <h1 className="mainTitle">{title}</h1>
    </>
  );
};

Header.defaultProps = {
  title: "Metflixer",
};

export default Header;
