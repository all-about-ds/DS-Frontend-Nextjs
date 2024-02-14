import React from "react";
import * as S from "./style";
import Link from "next/link";

export default function NotLoggedInHeader() {
  return (
    <S.HeaderContentBox>
      <Link href={"/login"}>
        <S.Text>로그인</S.Text>
      </Link>
      <Link href={"/signup "}>
        <S.Text>회원가입</S.Text>
      </Link>
    </S.HeaderContentBox>
  );
}
