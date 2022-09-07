import React from "react";
import * as S from "./style";

import Header from "../../Components/header";
import ButtonComponent from "../../Components/ButtonComponent";
import backgroundHero from "../../assets/banner-hero.webp";
import CardS from "../../Components/CardS";
import burguer from "../../assets/icons/burger.webp";
import headset from "../../assets/icons/headset.webp";
import delivery from "../../assets/icons/delivery.webp";
import imageBatata from "../../assets/ofertas/oferta-1.webp";
import batata from "../../assets/ofertas/oferta-2.webp";
import sorvete from "../../assets/ofertas/oferta-3.webp";
import timer from "../../assets/icons/timer.webp";

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
      <S.backgroundOffer>
        <S.containeroOffer>
          <h2>ofertas especiais</h2>
          <p>
            Aproveite todas nossas ofertas. fiquem de olhos aberto porque sempre
            estamos mudando nosso cardapio.
          </p>
          <S.imagesOffer>
            <img id="primaryImage" src={imageBatata} alt="" />
            <S.imageRight>
              <img src={batata} alt="" />
              <img src={sorvete} alt="" />
            </S.imageRight>
          </S.imagesOffer>

          <S.OfferHours>
            <S.Offeroperation>
              <S.containerOfferOperation>
                <S.pictureOfferOperation>
                  <img src={timer} alt="" />
                </S.pictureOfferOperation>
                <S.informationOfferOperation>
                  <h3>horario de funcionamento</h3>
                  <p>
                    Segunda-feira a sexta feira: 17h00 - 23h00 Sabado e Domingo
                    18h30-23h00
                  </p>
                </S.informationOfferOperation>
              </S.containerOfferOperation>
            </S.Offeroperation>

            <S.OfferEmpireBurguer>
              <span>Não esqueça de marcar a gente no Instragram</span>
              <h3>#empireburguer</h3>
            </S.OfferEmpireBurguer>
          </S.OfferHours>
        </S.containeroOffer>
      </S.backgroundOffer>
    </>
  );
};
export default Hero;
