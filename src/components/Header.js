import React from "react";

const Header = ({ localEscolhido }) => {
  return (
    <div className="jumbotron text-center">
      <h1>{localEscolhido ? localEscolhido : "CoronaBrasil"}</h1>
    </div>
  );
}

export default Header;