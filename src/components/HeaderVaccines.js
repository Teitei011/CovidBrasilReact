import React from "react";
import "./Header.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;

  flex-direction: row;

  .spacing {
    flex: 1;
  }

  h1 {
    flex: 9;
  }

  button {
    flex: 1;
    border-radius: 15rem;
    height: 5rem;
    width: 5rem;
    background: #fb3554;
    border: 0;
    margin-left: 1rem;
  }
`;

const Header = ({ localEscolhido }) => {
  return (
    <Wrapper>
      <Link to="/">
        <button className="button">Cases</button>
      </Link>

      <h1 className="h1">{localEscolhido ? localEscolhido : "CoronaBrasil"}</h1>
      <div className="spacing" />
    </Wrapper>
  );
};

export default Header;
