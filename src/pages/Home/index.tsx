import * as S from "./style";
import { useState } from "react";
import Header from "../../Components/header";
import ButtonComponent from "../../Components/ButtonComponent";
import CardS from "../../Components/CardS";
import burguer from "../../assets/icons/burger.webp";
import headset from "../../assets/icons/headset.webp";
import delivery from "../../assets/icons/delivery.webp";
import imageBatata from "../../assets/ofertas/oferta-1.webp";
import batata from "../../assets/ofertas/oferta-2.webp";
import sorvete from "../../assets/ofertas/oferta-3.webp";
import timer from "../../assets/icons/timer.webp";
import Footer from "../../Components/Footer";

const Hero = () => {
  return (
    <>
      <Header />

      <S.backgroundHero>
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
            alt={"hamburger"}
          />
          <CardS
            image={`${headset}`}
            textPrincipal={"atendimento"}
            text={"Totalmente personalizado"}
            alt={"headset"}
          />
          <CardS
            image={`${delivery}`}
            textPrincipal={"delivery speed"}
            text={"Entregamos menos de 45 minutos"}
            alt={"man on a motorcycle"}
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
            <img
              id="primaryImage"
              src={imageBatata}
              alt="fries stuffed promotion"
            />
            <S.imageRight>
              <img src={batata} alt="French fries promotion" />
              <img src={sorvete} alt="ice cream promotion" />
            </S.imageRight>
          </S.imagesOffer>
          <S.OfferHours>
            <S.Offeroperation>
              <S.containerOfferOperation>
                <img src={timer} alt="" />
                <S.informationOfferOperation>
                  <span>horario de funcionamento</span>
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

      <S.backgroundWhereitIs>
        <h2>onde ficar a nossa castelo</h2>
        <p>estaremos de portas abertas a nossa realeza</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15004.801725726546!2d-43.987622522245935!3d-19.915956916358894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1662569257104!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </S.backgroundWhereitIs>

      <Footer />
    </>
  );
};
export default Hero;
