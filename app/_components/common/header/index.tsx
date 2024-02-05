"use client";

import Link from "next/link";
import * as S from "./style";
import * as Image from "@/app/_assets/index";
import tokenService from "@/app/_utils/tokenService";
import LoggedInHeader from "./status/logged-in";
import NotLoggedInHeader from "./status/not-logged-in";

export default function Header() {
  return (
    <>
      <S.HeaderLayout>
        <S.HeaderContentWrapper>
          <Link href={"/"}>
            <S.StyledHeaderLogo>
              <Image.HeaderLogo />
            </S.StyledHeaderLogo>
          </Link>
          {tokenService.getLocalAccessToken() ? (
            <LoggedInHeader />
          ) : (
            <NotLoggedInHeader />
          )}
        </S.HeaderContentWrapper>
      </S.HeaderLayout>
      <S.HeaderBottomBar />
    </>
  );
}
