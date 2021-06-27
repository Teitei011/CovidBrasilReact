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
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  .socials {
    display: flex;
    flex-direction: column;

    gap: 2rem;
  }
`;

const Footer = ({ data }) => {

  return (
    <div className="small-text">
      Dados atualizados no dia: <br /> {data ? " 01/01/1970" : data}
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
  
        <EmailIcon round={true}/>
        <FacebookIcon round={true}/>
        <FacebookMessengerIcon round={true}/>
        <LinkedinIcon round={true}/>
        <RedditIcon round={true}/>
        <TelegramIcon round={true}/>
        <TwitterIcon round={true}/>
        <WhatsappIcon round={true}/>
      </div>
    </div>
  );
};

export default Footer;
