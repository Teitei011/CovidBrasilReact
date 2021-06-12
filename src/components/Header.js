import React from "react";
import "./Header.css";
import styled from "styled-components";

const headerStyle = styled.div`
  h1 {
    background-color: white;
    font-size: 20rem;
  }
`;

const Header = ({ localEscolhido }) => {
  return (
    <headerStyle>
      <h1>{localEscolhido ? localEscolhido : "CoronaBrasil"}</h1> <br />
    </headerStyle>
  );
};

export default Header;
