import * as S from "./style";
import { useState } from "react";
import Header from "../../Components/header";
import ButtonComponent from "../../Components/ButtonComponent";
import CardS from "../../Components/CardS";
import burguer from "../../assets/icons/burger.webp";
import headset from "../../assets/icons/headset.webp";
import delivery from "../../assets/icons/delivery.webp";
import imageBatata from "../../assets/ofertas/oferta-01.webp";
import batata from "../../assets/ofertas/oferta-2.webp";
import sorvete from "../../assets/ofertas/oferta-03.webp";
import timer from "../../assets/icons/timer.webp";
import logoFooter from "../../assets/logo2.webp";
import imageHero from "../../assets/banner-hero.webp";
import mobileHero from "../../assets/banner_mobile.webp";

const Hero = () => {
  return (
    <>
      <Header />

      <S.backgroundHero
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

      <S.backgroundWhereitIs>
        <S.informationWhereitIs>
          <h2>onde ficar a nossa castelo</h2>
          <p>estaremos de portas abertas a nossa realeza</p>
        </S.informationWhereitIs>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15004.801725726546!2d-43.987622522245935!3d-19.915956916358894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1662569257104!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </S.backgroundWhereitIs>

      <S.backgroundFooter>
        <S.containerFooter>
          <img src={logoFooter} alt="" />
          <S.navLinksFooter>
            <S.linksFooter>
              <li id="footer__home">
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">localização</a>
              </li>
              <li>
                <a href="#">cardapio</a>
              </li>
              <li>
                <a href="#">sobre</a>
              </li>
            </S.linksFooter>

            <S.imagesLink>
              <svg
                width="28"
                height="15"
                viewBox="0 0 28 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1002_239)">
                  <path
                    d="M0.5 8.59427H2.55485L3.6967 2.91458H1.64158L0.5 8.59427ZM1.7548 2.23716H3.81826L4.15737 0.537832H2.09472L1.7548 2.23716ZM3.35409 10.1925H5.40921L6.66482 4.05617H8.20603L8.43327 2.91458H6.92164L6.97892 2.65776C7.06444 2.1737 7.23575 1.6302 8.00622 1.6302C8.46339 1.6302 8.89124 1.65871 9.3191 1.85852L9.54769 0.659924C9.07086 0.491678 8.56914 0.40477 8.0635 0.402832C6.408 0.402832 5.26668 1.37338 4.83829 2.91458H4.12483L3.89651 4.05617H4.60997L3.35409 10.1925Z"
                    fill="#F59A1B"
                  />
                  <path
                    d="M9.86171 8.70867C12.2877 8.70867 13.9717 6.51075 13.9717 4.71272C13.9717 3.37133 12.7443 2.8004 11.5457 2.8004C8.89062 2.8004 7.43574 5.1707 7.43574 6.79635C7.43574 8.13774 8.69162 8.70867 9.86171 8.70867ZM16.3697 8.70867C18.7956 8.70867 20.4796 6.51075 20.4796 4.71272C20.4796 3.37133 19.2238 2.8004 18.0249 2.8004C15.3706 2.8004 13.9152 5.16936 13.9152 6.79635C13.9152 8.13774 15.1996 8.70867 16.3697 8.70867ZM23.8189 8.59438H25.8452L27.5002 0.518311H25.4453L24.9599 2.91577L24.1037 2.83025C22.1058 2.83025 20.2793 5.39875 20.2793 7.22555C20.2793 7.96751 20.7634 8.70974 21.5922 8.70974C22.7623 8.70974 23.59 8.13882 23.9318 7.56789H24.0459L23.8189 8.59438ZM17.4822 12.8471C15.8872 14.1687 13.8385 14.814 11.774 14.6452C9.06246 14.4739 7.12164 12.3902 6.7793 10.1926H6.89332C7.52126 11.5641 9.03396 12.8471 10.8893 13.0467C12.7717 13.275 15.0277 12.419 16.2548 11.2487L14.8849 10.1926H19.0234L18.1091 14.5882L17.5096 12.8757L17.4822 12.8471Z"
                    fill="#F59A1B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1002_239">
                    <rect
                      width="27"
                      height="14.2686"
                      fill="white"
                      transform="translate(0.5 0.402832)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.50206 4.66872C6.94756 4.66872 4.88709 6.72919 4.88709 9.28369C4.88709 11.8382 6.94756 13.8987 9.50206 13.8987C12.0566 13.8987 14.117 11.8382 14.117 9.28369C14.117 6.72919 12.0566 4.66872 9.50206 4.66872ZM9.50206 12.284C7.85128 12.284 6.50173 10.9385 6.50173 9.28369C6.50173 7.62889 7.84726 6.28336 9.50206 6.28336C11.1569 6.28336 12.5024 7.62889 12.5024 9.28369C12.5024 10.9385 11.1529 12.284 9.50206 12.284ZM15.3822 4.47994C15.3822 5.0784 14.9003 5.55637 14.3058 5.55637C13.7074 5.55637 13.2294 5.07439 13.2294 4.47994C13.2294 3.8855 13.7114 3.40352 14.3058 3.40352C14.9003 3.40352 15.3822 3.8855 15.3822 4.47994ZM18.4388 5.57243C18.3705 4.13051 18.0412 2.85326 16.9848 1.80093C15.9325 0.748603 14.6552 0.419249 13.2133 0.346951C11.7272 0.262605 7.2729 0.262605 5.78679 0.346951C4.34888 0.415232 3.07163 0.744586 2.01528 1.79691C0.958942 2.84924 0.633604 4.12649 0.561307 5.56842C0.47696 7.05453 0.47696 11.5088 0.561307 12.9949C0.629588 14.4369 0.958942 15.7141 2.01528 16.7665C3.07163 17.8188 4.34486 18.1481 5.78679 18.2204C7.2729 18.3048 11.7272 18.3048 13.2133 18.2204C14.6552 18.1521 15.9325 17.8228 16.9848 16.7665C18.0372 15.7141 18.3665 14.4369 18.4388 12.9949C18.5232 11.5088 18.5232 7.05854 18.4388 5.57243ZM16.5189 14.5895C16.2056 15.3767 15.5991 15.9832 14.8079 16.3005C13.623 16.7705 10.8114 16.662 9.50206 16.662C8.19268 16.662 5.37711 16.7665 4.19625 16.3005C3.40901 15.9873 2.80252 15.3808 2.48522 14.5895C2.01528 13.4046 2.12373 10.5931 2.12373 9.28369C2.12373 7.97431 2.0193 5.15873 2.48522 3.97788C2.7985 3.19064 3.405 2.58415 4.19625 2.26684C5.38112 1.79691 8.19268 1.90536 9.50206 1.90536C10.8114 1.90536 13.627 1.80093 14.8079 2.26684C15.5951 2.58013 16.2016 3.18663 16.5189 3.97788C16.9888 5.16275 16.8804 7.97431 16.8804 9.28369C16.8804 10.5931 16.9888 13.4086 16.5189 14.5895Z"
                  fill="#F59A1B"
                />
              </svg>
            </S.imagesLink>
          </S.navLinksFooter>
        </S.containerFooter>
      </S.backgroundFooter>
    </>
  );
};
export default Hero;
