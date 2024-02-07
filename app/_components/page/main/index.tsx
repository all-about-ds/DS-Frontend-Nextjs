"use client";

import * as S from "./style";
import { useState } from "react";

type SortingPostsType = "최신순" | "인기순";

export default function MainPage() {
  const [sortBy, setSortBy] = useState<SortingPostsType>("최신순");

  return (
    <S.MainPageLayout>
      <S.SortButtonsWrapper>
        <S.SortButton className="latest" sortType={sortBy}>
          최신순
        </S.SortButton>
        <S.SortButton className="popular" sortType={sortBy}>
          인기
        </S.SortButton>
      </S.SortButtonsWrapper>
      <S.PostCardWrapper />
    </S.MainPageLayout>
  );
}
