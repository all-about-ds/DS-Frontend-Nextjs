"use client";

import { GroupType } from "@/app/_types/group.type";
import * as S from "./style";
import { useCallback, useEffect, useRef, useState } from "react";
import groupRequest from "@/app/_api/request/group.request";
import MainPostCard from "@/app/_components/ui/post-card/main";
import { ModalAtomFamily, SearchAtom } from "@/app/_atoms";
import { useRecoilState } from "recoil";
import JoinGroupModal from "@/app/_components/modal/modals/join-group";
import tokenService from "@/app/_utils/tokenService";
import { useRouter } from "next/navigation";
import CheckPasswordModal from "@/app/_components/modal/modals/check-password";

type PostsSortingType = "최신순" | "인기순";

export default function MainPage() {
  const [sortBy, setSortBy] = useState<PostsSortingType>("최신순");
  const [list, setList] = useState<GroupType[]>([]);
  const page = useRef(0);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const observerTargetEl = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState<boolean>(true);
  const [searchValues, setSearchValues] = useRecoilState(SearchAtom);
  const [isNoneSearchResult, setIsNoneSearchResult] = useState(false);
  const [joinGroupModal, setJoinGroupModal] = useRecoilState(
    ModalAtomFamily("join-group")
  );
  const [checkPasswordModal] = useRecoilState(
    ModalAtomFamily("check-password")
  );
  const [clickedGroupData, setClickedGroupData] = useState<GroupType>();
  const router = useRouter();

  const onClickPostCard = (props: GroupType) => {
    if (tokenService.getLocalAccessToken()) {
      router.push("/signin");
    } else {
      setClickedGroupData(props);
      setJoinGroupModal(true);
    }
  };

  const getGroupList = useCallback(async () => {
    setLoaded(false);
    setIsNoneSearchResult(false);

    try {
      const response: any = await groupRequest.getGroupList({
        keyword: searchValues.keyword ? searchValues.keyword : "",
        page: page.current,
        size: 8,
        popularity: sortBy === "인기순", // false => 최신순으로 요청
      });

      if (searchValues.keyword && response.data.groups.length === 0) {
        setIsNoneSearchResult(true);
      }

      setList((prevPosts) => [...prevPosts, ...response.data.groups]);
      setHasNextPage(response.data.groups.length === 8);
      setLoaded(true);

      if (response.data.groups.length) {
        page.current += 1;
      }
    } catch (e) {
      Promise.reject(e);
    }
  }, [sortBy, searchValues]);

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
    if (searchValues.isSearchRequested) {
      page.current = 0;
      setList([]);
      getGroupList();
      setSearchValues((oldValue) => ({
        ...oldValue,
        isSearchRequested: false,
      }));
    }
  }, [searchValues.isSearchRequested]);

  useEffect(() => {
    if (list.length !== 0 || isNoneSearchResult) {
      setList([]);
      page.current = 0;
      getGroupList();
    }
  }, [sortBy]);

  return (
    <>
      {checkPasswordModal && (
        <CheckPasswordModal
          index={clickedGroupData?.idx}
          groupName={clickedGroupData?.name}
        />
      )}
      {joinGroupModal && <JoinGroupModal modalProps={clickedGroupData} />}
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
            <div onClick={() => onClickPostCard(item)} key={item.idx}>
              <MainPostCard cardProps={item} />
            </div>
          ))}
        </S.PostCardWrapper>
        <div ref={observerTargetEl} />
        {isNoneSearchResult && (
          <S.SearchResultIsNone>검색 결과가 없습니다.</S.SearchResultIsNone>
        )}
      </S.MainPageLayout>
    </>
  );
}
