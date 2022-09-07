import React from "react";
import * as S from "./style";

const ButtonComponent = (props: { text: string }) => {
  return <S.backgroundButton>{props.text}</S.backgroundButton>;
};
export default ButtonComponent;
