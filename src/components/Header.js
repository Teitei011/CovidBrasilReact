import React from "react";

const Header = ({ localEscolhido }) => {
  return (
    <div className="jumbotron text-center">
      <h1>{localEscolhido ? localEscolhido : "CoronaBrasil"}</h1> <br />
    </div>
  );
}

export default Header;