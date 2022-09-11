import * as S from "./style";

const CardS = (props: {
  textPrincipal: string;
  text: string;
  image: string;
  alt: string;
}) => {
  return (
    <S.backgroundCard>
      <S.imageCard>
        <img src={props.image || undefined} alt={props.alt || undefined} />
      </S.imageCard>

      <S.cardInformation>
        <span>{props.textPrincipal}</span>
        <p>{props.text}</p>
      </S.cardInformation>
    </S.backgroundCard>
  );
};
export default CardS;
