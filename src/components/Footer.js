import React from "react";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";

import {
  FacebookIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import {
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  margin-top: 5rem;

  .info {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: space-between; */
    gap: 20rem;
  }

  .img {
    max-width: 20rem;
  }

  .socials {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: space-between;

    gap: 2rem;
  }
`;

const Footer = ({ data, path }) => {
  const { id } = useParams();

  let dia = new Date();
  let mes = dia.getMonth() + 1;
  let diaAtual = dia.getDate();
  if (mes < 10) {
    mes = "0" + mes;
  }

  if (dia.getHours() < 19) {
    diaAtual -= 1;
  }

  if (diaAtual < 10) {
    diaAtual = "0" + diaAtual;
  }
  let diaFinal = diaAtual + "/" + mes + "/" + dia.getFullYear();

  let url = path;
  if (id === undefined) {
    path = path.replace("undefined", "Brasil")
    url = path
  }

  return (
    <Wrapper>
      Dados atualizados no dia: <br /> {diaFinal}
      <div className="info">
        <div className="">
          <p>
            <a href="http://covid.saude.gov.br/">Source</a>
          </p>
        </div>

        <div className="">
          Total de visitas: <br />
          <img
            className="img"
            src="https://profile-counter.glitch.me/Teitei011/count.svg"
            alt="Contador de Visitas"
          ></img>
        </div>
      </div>
      <div className="">
        <p> Bugs, comentários ou sugestões? </p> <br />
        <a href="mailto: stefantleal14@gmail.com">Me mande um email!</a>
      </div>
      <p>
        Quer mostrar como está a situação do covid para amigos/familiares?
        Clique aqui para compartilhar!
      </p>
      <div className="socials">
        <FacebookShareButton
          url={url}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon round={true} />
        </FacebookShareButton>

        <RedditShareButton
          url={url}
          className="Demo__some-network__share-button"
        >
          <RedditIcon round={true} />
        </RedditShareButton>

        <TelegramShareButton
          url={url}
          className="Demo__some-network__share-button"
        >
          <TelegramIcon round={true} />
        </TelegramShareButton>

        <TwitterShareButton
          url={url}
          className="Demo__some-network__share-button"
        >
          <TwitterIcon round={true} />
        </TwitterShareButton>

        <WhatsappShareButton
          url={url}
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon round={true} />
        </WhatsappShareButton>
      </div>
    </Wrapper>
  );
};

export default Footer;
