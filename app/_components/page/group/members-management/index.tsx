"use client";

import CenterAlignmentLayout from "@/app/_components/common/layout/alignment";
import * as S from "./style";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import MemberItem from "@/app/_components/ui/group/member";
import { useRecoilValue } from "recoil";
import { GroupDataAtom } from "@/app/_atoms";
import { toast } from "react-toastify";
import { GroupInformationType } from "@/app/_types/group.type";

export default function GroupMembersManagementPage() {
  const router = useRouter();
  const groupData = useRecoilValue(GroupDataAtom);
  const [data, setData] = useState<GroupInformationType>();

  const [isClicked, setIsClicked] = useState<boolean[]>(
    Array(groupData?.memberList?.length).fill(false)
  );

  useEffect(() => {
    const checkServerAndClientSync = () => {
      if (groupData && groupData.host) {
        setData(groupData);
      } else {
        toast.error("잘못된 접근입니다.");
        router.replace("/");
      }
    };

    checkServerAndClientSync();
  }, [groupData]);

  const handleClick = (idx: number) => {
    const newArr = Array(data?.memberList?.length).fill(false);
    newArr[idx] = !isClicked[idx];
    setIsClicked(newArr);
  };

  return (
    <CenterAlignmentLayout>
      <S.Layout>
        <S.TopText>DS</S.TopText>
        <S.TitleText>그룹원 설정</S.TitleText>
        {data?.memberList &&
          data?.memberList.map((item, index) => (
            <MemberItem
              key={item.idx}
              handleClick={handleClick}
              elementIndex={index}
              isClicked={isClicked[index]}
              idx={item.idx}
              name={item.name}
              profileImg={item.profileImg}
            />
          ))}
        <S.SubmithButtonBox
          onClick={() => {
            router.push("/group/" + data?.idx + "/information");
          }}
        >
          <S.SubmitButton>완료</S.SubmitButton>
        </S.SubmithButtonBox>
      </S.Layout>
    </CenterAlignmentLayout>
  );
}
