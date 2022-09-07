import * as S from "./style";

const CardS = (props: {
  textPrincipal: string;
  text: string;
  image: string;
}) => {
  return (
    <S.backgroundCard>
      <S.containerCard>
        <S.imageCard>
          <img src={props.image || undefined} alt="" />
        </S.imageCard>

        <S.cardInformation>
          <h3>{props.textPrincipal}</h3>
          <p>{props.text}</p>
        </S.cardInformation>
      </S.containerCard>
    </S.backgroundCard>
  );
};
export default CardS;
