import React from "react";

const Footer = ({ data }) => {
  return (
    <div className="small-text">

      Dados atualizados no dia: <br /> {!data ? " 24/08/1998" : data.date[data.date.length - 1]}

      <br />
      <p> Informações retiradas do Ministério da Saúde, link abaixo: </p>

      <p> <a href="http://covid.saude.gov.br/">Source</a></p>
          Total de visitas: <br />
      {/* <img src="https://profile-counter.glitch.me/Teitei011/count.svg" alt="Contador de Visitas"></img> */}
      <br />
      <p> Bugs, comentários ou sugestões? </p> <br />
      <a href="mailto: stefantleal14@gmail.com">Me mande um email!</a>
      <br /><br />
    </div>


  );

}



export default Footer;