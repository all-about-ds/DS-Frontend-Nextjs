"use client";

import { GroupType } from "@/app/_types/group.type";
import * as S from "./style";
import { useEffect, useState } from "react";
import groupRequest from "@/app/_api/request/group.request";

type SortingPostsType = "최신순" | "인기순";

export default function MainPage() {
  const [sortBy, setSortBy] = useState<SortingPostsType>("최신순");
  const [list, setList] = useState<GroupType[]>([]);

  const getGroupList = async () => {
    try {
      const response: any = await groupRequest.getGroupList({
        keyword: "",
        page: 0,
        size: 8,
        popularity: sortBy === "인기순", // false => 최신순으로 요청
      });

      console.log(response.data);

      setList(response.data.groups);
    } catch (e) {
      Promise.reject(e);
    }
  };

  useEffect(() => {
    getGroupList();
  }, [sortBy]);

  const sortingPosts = (type: SortingPostsType) => {
    setSortBy(type);
  };

  return (
    <S.MainPageLayout>
      <S.SortButtonsWrapper>
        <S.SortButton
          className="latest"
          isActive={sortBy === "최신순"}
          onClick={() => sortingPosts("최신순")}
        >
          최신순
        </S.SortButton>
        <S.SortButton
          className="popular"
          isActive={sortBy === "인기순"}
          onClick={() => sortingPosts("인기순")}
        >
          인기순
        </S.SortButton>
      </S.SortButtonsWrapper>
      <S.PostCardWrapper />
    </S.MainPageLayout>
  );
}
