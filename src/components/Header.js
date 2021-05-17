import React from "react";
import "./Header.css";


const Header = ({ localEscolhido }) => {
  return (
    <div className="Header">
      <h1>{localEscolhido ? localEscolhido : "CoronaBrasil"}</h1> <br />
    </div>
  );
}

export default Header;