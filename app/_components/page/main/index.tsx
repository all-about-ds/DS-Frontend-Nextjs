"use client";

import { GroupType } from "@/app/_types/group.type";
import * as S from "./style";
import { useCallback, useEffect, useRef, useState } from "react";
import groupRequest from "@/app/_api/request/group.request";
import MainPostCard from "@/app/_components/ui/post-card/main";

type PostsSortingType = "최신순" | "인기순";

export default function MainPage() {
  const [sortBy, setSortBy] = useState<PostsSortingType>("최신순");
  const [list, setList] = useState<GroupType[]>([]);
  const page = useRef<number>(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const observerTargetEl = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState<boolean>(true);

  const getGroupList = useCallback(async () => {
    setLoaded(false);

    try {
      const response: any = await groupRequest.getGroupList({
        keyword: "",
        page: page.current,
        size: 8,
        popularity: sortBy === "인기순", // false => 최신순으로 요청
      });

      setList((prevPosts) => [...prevPosts, ...response.data.groups]);
      setHasNextPage(response.data.groups.length === 8);
      setLoaded(true);

      if (response.data.groups.length) {
        page.current += 1;
      }
    } catch (e) {
      Promise.reject(e);
    }
  }, [sortBy]);

  useEffect(() => {
    if (!observerTargetEl.current || !hasNextPage) return;

    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && loaded) {
        getGroupList();
      }
    });

    io.observe(observerTargetEl.current);
    return () => io.disconnect();
  }, [hasNextPage, loaded]);

  useEffect(() => {
    if (list.length !== 0) {
      setList([]);
      page.current = 0;
      getGroupList();
    }
  }, [sortBy]);

  return (
    <S.MainPageLayout>
      <S.SortButtonsWrapper>
        <S.SortButton
          className="latest"
          isActive={sortBy === "최신순"}
          onClick={() => setSortBy("최신순")}
        >
          최신순
        </S.SortButton>
        <S.SortButton
          className="popular"
          isActive={sortBy === "인기순"}
          onClick={() => setSortBy("인기순")}
        >
          인기순
        </S.SortButton>
      </S.SortButtonsWrapper>
      <S.PostCardWrapper>
        {list.map((item) => (
          <MainPostCard key={item.idx} cardProps={item} />
        ))}
      </S.PostCardWrapper>
      <div ref={observerTargetEl} />
    </S.MainPageLayout>
  );
}
