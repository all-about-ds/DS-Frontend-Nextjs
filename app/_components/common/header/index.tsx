"use client";

import Link from "next/link";
import * as S from "./style";
import * as Image from "@/app/_assets/index";
import tokenService from "@/app/_utils/tokenService";
import LoggedInHeader from "./status/logged-in";
import NotLoggedInHeader from "./status/not-logged-in";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

type LoginStatusType = "undefined" | "logged-in" | "not-logged-in";

export default function Header() {
  const pathname = usePathname();
  const [loginStatus, setLoginStatus] = useState<LoginStatusType>("undefined");

  useEffect(() => {
    const token = tokenService.getLocalAccessToken();

    if (token) {
      setLoginStatus("logged-in");
    } else {
      setLoginStatus("not-logged-in");
    }
  }, [pathname]);

  return (
    <>
      <S.HeaderLayout>
        <S.HeaderContentWrapper>
          <Link href={"/"}>
            <S.StyledHeaderLogo>
              <Image.HeaderLogo />
            </S.StyledHeaderLogo>
          </Link>
          {loginStatus === "logged-in" && <LoggedInHeader />}
          {loginStatus === "not-logged-in" && <NotLoggedInHeader />}
        </S.HeaderContentWrapper>
      </S.HeaderLayout>
      <S.HeaderBottomBar />
    </>
  );
}
