import React from "react";
import * as S from "./style";

import Header from "../../Components/header";
import ButtonComponent from "../../Components/ButtonComponent";
import backgroundHero from "../../assets/banner-hero.webp";
import CardS from "../../Components/CardS";
import burguer from "../../assets/icons/burger.webp";
import headset from "../../assets/icons/headset.webp";
import delivery from "../../assets/icons/delivery.webp";

const Hero = () => {
  return (
    <>
      <Header />
      <S.backgroundHero
        style={{
          backgroundImage: `url(${backgroundHero})`,
        }}
      >
        <S.container>
          <S.heroInformation>
            <span id="experience">Uma nova experiência!</span>
            <h1>
              king<span>burguer</span>
            </h1>
            <span id="appetite">
              Para quem tem um
              <div>Apetite de um rei</div>
            </span>
            <ButtonComponent text={"comprar agora"} />
          </S.heroInformation>
        </S.container>
      </S.backgroundHero>
      <S.backgroundSobre>
        <S.containerSobre>
          <CardS
            image={`${burguer}`}
            textPrincipal={"arsenal"}
            text={"Nossas receitas são feitas com todos cuidado"}
          />
          <CardS
            image={`${headset}`}
            textPrincipal={"atendimento"}
            text={"Totalmente personalizado"}
          />
          <CardS
            image={`${delivery}`}
            textPrincipal={"delivery speed"}
            text={"Entregamos menos de 45 minutos"}
          />
        </S.containerSobre>
      </S.backgroundSobre>
    </>
  );
};
export default Hero;
