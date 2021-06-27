import React from "react";
import styled from "styled-components";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import {
  EmailShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import { ShareIcon } from "./ShareIcon";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  .socials {
    display: flex;
    flex-direction: column;

    gap: 2rem;
  }
  /* 
  .Demo__some-network {
    vertical-align: top;
    display: inline-block;
    margin-right: 10px;
    text-align: center;
  } */
`;

const Footer = ({ data, path }) => {
  let dia = new Date();
  let mes = dia.getMonth();

  if (mes < 10) {
    mes = "0" + mes;
  }
  let diaFinal = dia.getDate() + "/" + mes + "/" + dia.getFullYear();

  return (
    <div className="small-text">
      Dados atualizados no dia: <br /> {diaFinal}
      <br />
      <p> Informações retiradas do Ministério da Saúde, link abaixo: </p>
      <p>
        {" "}
        <a href="http://covid.saude.gov.br/">Source</a>
      </p>
      Total de visitas: <br />
      <img
        src="https://profile-counter.glitch.me/Teitei011/count.svg"
        alt="Contador de Visitas"
      ></img>
      <br />
      <p> Bugs, comentários ou sugestões? </p> <br />
      <a href="mailto: stefantleal14@gmail.com">Me mande um email!</a>
      <br />
      <br />
      <div className="socials">
        <FacebookShareButton
          url={path}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon round={true} />
        </FacebookShareButton>

        <RedditShareButton
          url={path}
          className="Demo__some-network__share-button"
        >
          <RedditIcon round={true} />
        </RedditShareButton>

        <TelegramShareButton
          url={path}
          className="Demo__some-network__share-button"
        >
          <TelegramIcon round={true} />
        </TelegramShareButton>

        <TwitterShareButton
          url={path}
          className="Demo__some-network__share-button"
        >
          <TwitterIcon round={true} />
        </TwitterShareButton>

        <WhatsappShareButton
          url={path}
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon round={true} />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default Footer;