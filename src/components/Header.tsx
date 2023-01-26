import React from "react";
import * as S from "../styled";
import myImage from "./calendar.png";
import { LocalDate} from "./localDate";

export const Header = () => {
  return (
    <S.Navigation>
      <LocalDate />
      <S.Project>
        <S.Image src={myImage}></S.Image>
      </S.Project>
    </S.Navigation>
  );
};
